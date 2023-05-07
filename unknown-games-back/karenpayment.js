import _ from 'lodash';
import Stripe from 'stripe';

import otcServiceUsers from '../grpcClients/otcServiceUsers';

const {STRIPE_PUBLIC_KEY, STRIPE_SECRET_KEY} = process.env;
const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2022-08-01',
});

async function checkCustomer(id) {
    let customer = await stripe.customers.search({
        // eslint-disable-next-line
        query: `metadata[\"userId\"]:\"${id}\"`,
    }).then((d) => d)
        .catch(() => null);

    if (customer === null || _.isEmpty(customer.data)) customer = null;

    return _.get(customer, 'data.0') || null;
}

export default {
    getStripePublicKey(req, res) {
        try {
            res(null, {
                status: 'ok',
                message: 'Stripe key',
                publicKey: STRIPE_PUBLIC_KEY,
            });
        } catch (e) {
            res(null, {
                status: 'error',
                message: e.message,
                publicKey: null,
            });
        }
    },

    async setupStripeIntent({request: req}, res) {
        try {
            if (_.isEmpty(req)) {
                res(null, {
                    status: 'ok',
                    message: 'nothing to setup',
                    customerId: null,
                    intent: null,
                });
                return;
            }

            const {id} = req;

            let customer = await checkCustomer(id);

            if (_.isEmpty(customer)) {
                const {profile} = await new Promise((resolve, reject) => {
                    otcServiceUsers.getProfile({id}, (err, data) => {
                        if (data) {
                            resolve(data);
                        } else {
                            reject(err);
                        }
                    });
                });

                customer = await stripe.customers.create({
                    name: `${profile.fName} ${profile.lName}`,
                    phone: profile.phone ? `${profile.phone}` : '',
                    email: profile.email ? `${profile.email}` : '',
                    metadata: {userId: `${id}`},
                }).then((d) => d)
                    .catch(() => null);
            }

            const setupIntent = await stripe.setupIntents.create({
                // customer: `${customer.id}`,
                payment_method_types: ['card'],
            }).then((d) => d)
                .catch(() => null);

            res(null, {
                status: 'ok',
                message: 'strip intent',
                customerId: customer.id,
                intent: setupIntent.client_secret,
            });
        } catch (e) {
            res(null, {
                status: 'error',
                message: e.message,
                customerId: null,
                intent: null,
            });
        }
    },

    async stripeAttach({request: req}, res) {
        try {
            if (_.isEmpty(req)) {
                res(null, {
                    status: 'ok',
                    message: 'nothing to attach',
                });
                return;
            }

            const {paymentMethodId, id} = req;

            const customer = await checkCustomer(id);

            if (!customer) {
                res(null, {
                    status: 'error',
                    message: 'can\'t find customer',
                });
                return;
            }

            const pm = await stripe.paymentMethods.retrieve(paymentMethodId).then((t) => t).catch(() => null);

            if (!pm) {
                res(null, {
                    status: 'error',
                    message: 'paymentMethodId is invalid',
                });
                return;
            }

            const {data: cards} = await stripe.customers.listPaymentMethods(customer.id, {
                type: 'card',
                limit: 100,
            }).then((d) => d)
                .catch(() => []);

            if (cards.find(({card: {fingerprint}}) => fingerprint === pm.card.fingerprint)) {
                await stripe.paymentMethods.detach(pm.id).then((d) => d).catch(() => null);

                res(null, {
                    status: 'error',
                    message: 'paymentMethodId already attached',
                });
                return;
            }

            await stripe.paymentMethods.attach(paymentMethodId, {customer: customer.id});

            res(null, {
                status: 'ok',
                message: 'attached',
            });
        } catch (e) {
            res(null, {
                status: 'error',
                message: e.message,
            });
        }
    },

    async stripeCharge({request: req}, res) {
        try {
            if (_.isEmpty(req)) {
                res(null, {
                    status: 'ok',
                    message: 'nothing to charge',
                    charge: null,
                });
                return;
            }

            const {paymentMethodId, amount, id} = req;

            const customer = await checkCustomer(id);

            if (!customer) {
                res(null, {
                    status: 'error',
                    message: 'can\'t find customer',
                    charge: null,
                });
                return;
            }

            const charge = await stripe.paymentIntents
                .create({
                    amount: +amount * 100,
                    currency: 'usd',
                    payment_method_types: ['card'],
                    off_session: true,
                    confirm: true,
                    customer: `${customer.id}`,
                    payment_method: paymentMethodId,
                })
                .then((d) => ({
                    ...d,
                    error: null,
                    status: 'ok',
                }))
                .catch((e) => ({
                    error: e.message,
                    id: null,
                    status: 'error',
                }));

            console.log(charge);

            res(null, {
                charge: {confirmationId: charge.id, message: charge.error || null},
                message: charge.error || 'success charged',
                status: charge.status,
            });
        } catch (e) {
            res(null, {
                charge: null,
                message: e.message,
                status: 'error',
            });
        }
    },

    async stripeCardList({request: req}, res) {
        try {
            if (_.isEmpty(req)) {
                res(null, {
                    status: 'ok',
                    message: 'nothing to show',
                    cards: [],
                });
                return;
            }

            const {id} = req;

            const customer = await checkCustomer(id);

            if (!customer) {
                res(null, {
                    cards: [],
                    message: 'can\'t find customer',
                    status: 'ok',
                });
                return;
            }

            const {data: cards} = await stripe.customers.listPaymentMethods(customer.id, {
                type: 'card',
                limit: 100,
            }).then((d) => d)
                .catch(() => null);

            res(null, {
                cards,
                message: 'card list',
                status: 'ok',
            });
        } catch (e) {
            res(null, {
                cards: [],
                message: e.message,
                status: 'error',
            });
        }
    },

    async stripeCardSingle({request: req}, res) {
        try {
            if (_.isEmpty(req)) {
                res(null, {
                    status: 'ok',
                    message: 'nothing to show',
                    card: null,
                });
                return;
            }

            const {id, paymentMethodId} = req;

            const customer = await checkCustomer(id);

            if (!customer) {
                res(null, {
                    status: 'error',
                    message: 'can\'t find customer',
                    card: null,
                });
                return;
            }

            const card = await stripe.paymentMethods.retrieve(paymentMethodId)
                .then((d) => d)
                .catch(() => null);

            res(null, {
                card,
                message: 'card list',
                status: 'ok',
            });
        } catch (e) {
            res(null, {
                card: null,
                message: e.message,
                status: 'error',
            });
        }
    },

    async deleteStripeCard({request: req}, res) {
        try {
            if (_.isEmpty(req)) {
                res(null, {
                    deleted: false,
                    message: 'nothing to delete',
                    status: 'ok',
                });
                return;
            }

            const {id, paymentMethodId} = req;

            const customer = await checkCustomer(id);

            if (!customer) {
                res(null, {
                    deleted: false,
                    status: 'error',
                    message: 'can\'t find customer',
                });
                return;
            }

            const deleted = await stripe.paymentMethods.detach(paymentMethodId).then(() => true).catch(() => false);

            res(null, {
                deleted,
                message: 'deleted',
                status: 'ok',
            });
        } catch (e) {
            res(null, {
                deleted: false,
                message: e.message,
                status: 'error',
            });
        }
    },

    async deleteStripeCustomer({request: req}, res) {
        try {
            if (_.isEmpty(req)) {
                res(null, {
                    deletedCustomer: null,
                    message: 'nothing to delete',
                    status: 'ok',
                });
                return;
            }

            const {id} = req;

            const customer = await checkCustomer(id);

            if (!customer) {
                res(null, {
                    deletedCustomer: null,
                    message: 'can\'t find customer',
                    status: 'error',
                });
                return;
            }

            const deletedCustomer = await stripe.customers
                .del(`${customer.id}`)
                .then((d) => d)
                .catch((e) => ({
                    id: customer.id,
                    object: e.message,
                    deleted: false,
                }));

            res(null, {
                deletedCustomer,
                message: 'customer deleted',
                status: 'ok',
            });
        } catch (e) {
            res(null, {
                deletedCustomer: null,
                message: e.message,
                status: 'error',
            });
        }
    },
};
