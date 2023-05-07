import React from "react";
import {PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {useParams} from "react-router-dom";

function CheckoutFormBasket() {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: window.location.origin + "/complete-basket",
            },
        });
    }

    return (
        <>
            <form className="payment-basket" onSubmit={handleSubmit}>
                <PaymentElement/>
                <br/>
                <button className="pay-btn" disabled={!stripe || !elements}>Pay</button>
            </form>
        </>
    );
}

export default CheckoutFormBasket;
