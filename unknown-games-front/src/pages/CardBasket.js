import React, {useCallback, useEffect, useState} from "react";
import NavBar from "../components/page-navigation/NavBar";
import {useDispatch, useSelector} from "react-redux";
import {getBasketSecret} from "../redux/actions/payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutFormBasket from "../components/payment/CheckoutFormBasket";

const stripePromise = loadStripe("pk_test_51MtrFBJJKYyEd7mo5bVGoIvPNHLugqBT0RZC2133Og8CmVBqEZuNRn9z2jd7jb3Tqf8z454R6v31vUuigD1XAPs600WAV3L64h");

function CardBasket() {
    const dispatch = useDispatch();

    const clientSecretBasket = useSelector((store) => store.payment.clientSecretBasket);

    useEffect(() => {
        dispatch(getBasketSecret());
    }, []);


    if (!clientSecretBasket) {
        return null;
    }
    const options = {
        clientSecret: clientSecretBasket
    };

    return (
        <>
            <NavBar/>
            <Elements stripe={stripePromise} options={options}>
                <CheckoutFormBasket/>
            </Elements>
        </>
    );
}

export default CardBasket;
