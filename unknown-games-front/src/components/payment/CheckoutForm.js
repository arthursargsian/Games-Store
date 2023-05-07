import React from "react";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import {PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import PaymentCard from "./PaymentCard";
import {useParams} from "react-router-dom";


function CheckoutForm() {
    const {id} = useParams();
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: window.location.origin + "/complete",
            },
        });
    }
    return (
        <>
          <div className="payment">
              <div className="paycard-block">
                  <PaymentCard id={id}/>
              </div>
              <form className="payment-block" onSubmit={handleSubmit}>
                  <PaymentElement/>
                  <br/>
                  <button className="pay-btn" disabled={!stripe || !elements}>Pay</button>
              </form>
          </div>
        </>
    );
}

export default CheckoutForm;
