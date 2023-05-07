import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CardElement, Elements, useStripe, useElements} from '@stripe/react-stripe-js';
import {attachPaymentMethod} from '../redux/actions/payment';
import {loadStripe} from '@stripe/stripe-js';
import MyComponent from "../components/MyComponent";
import NavBar from "../components/page-navigation/NavBar";

const stripePromise = loadStripe('pk_test_51MtrFBJJKYyEd7mo5bVGoIvPNHLugqBT0RZC2133Og8CmVBqEZuNRn9z2jd7jb3Tqf8z454R6v31vUuigD1XAPs600WAV3L64h');

function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    <MyComponent/>
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (error) {
            setError(error.message);
            setLoading(false);
            return;
        }

        const result = await dispatch(attachPaymentMethod(paymentMethod.id));

        if (result.payload.error) {
            setError(result.payload.error);
            setLoading(false);
            return;
        }
        setLoading(false);
    };

    return (
        <>
            <NavBar/>
            <form onSubmit={handleSubmit} className="paymet-form">
                <label htmlFor="cardElement">Card details:</label>
                <div id="cardElement">
                    <CardElement/>
                </div>

                <button type="submit" disabled={!stripe || loading}>
                    Attach Payment Method
                </button>

                {error && <p>{error}</p>}
            </form>

        </>
    );
}

export default function Payment() {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm/>
        </Elements>
    );
}
