import {createReducer} from "@reduxjs/toolkit";
import {
    deleteItemBasket,
    getBasketSecret,
    getClientSecret,
    listItemBasket,
    paymentConfirm,
    paymentConfirmBasket
} from "../actions/payment";
import {single} from "../actions/products";

const initialState = {
    clientSecret: "",
    clientSecretStatus: false,
    torrent: [],
    torrentStatus: false,
    getIistItemBasket: [],
    getIistItemBasketStatus: false,
    clientSecretBasket: "",
    clientSecretBasketStatus: false,
    payConfirmBasket: [],
    payConfirmBasketStatus: false,
    singleData: []
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(getClientSecret.pending, (state, action) => {
            state.clientSecretStatus = false;
        })
        .addCase(getClientSecret.fulfilled, (state, action) => {
            state.clientSecretStatus = true;
            state.clientSecret = action.payload.paymentIntent.client_secret;
        })
        .addCase(getClientSecret.rejected, (state, action) => {
            state.clientSecretStatus = false;
        })
        .addCase(paymentConfirm.pending, (state, action) => {
            state.torrentStatus = false;
        })
        .addCase(paymentConfirm.fulfilled, (state, action) => {
            state.torrentStatus = true;
            state.torrent = action.payload.charge.metadata;
        })
        .addCase(paymentConfirm.rejected, (state, action) => {
            state.torrentStatus = false;
        })
        .addCase(listItemBasket.pending, (state, action) => {
            state.getIistItemBasketStatus = false;
        })
        .addCase(listItemBasket.fulfilled, (state, action) => {
            state.getIistItemBasketStatus = true;
            state.getIistItemBasket = action.payload;
            console.log(state.getIistItemBasket)
        })
        .addCase(listItemBasket.rejected, (state, action) => {
            state.getIistItemBasketStatus = false;
        })
        .addCase(getBasketSecret.pending, (state, action) => {
            state.clientSecretBasketStatus = false;
        })
        .addCase(getBasketSecret.fulfilled, (state, action) => {
            state.clientSecretBasketStatus = true;
            state.clientSecretBasket = action.payload.paymentIntent.client_secret;
        })
        .addCase(getBasketSecret.rejected, (state, action) => {
            state.clientSecretBasketStatus = false;
        })
        .addCase(paymentConfirmBasket.pending, (state, action) => {
            state.payConfirmBasketStatus = false;
        })
        .addCase(paymentConfirmBasket.fulfilled, (state, action) => {
            state.payConfirmBasket = true;
            state.clientSecretBasket = action.payload.charge.metadata.download_links;
        })
        .addCase(paymentConfirmBasket.rejected, (state, action) => {
            state.payConfirmBasketStatus = false;
        })
        .addCase(deleteItemBasket.pending, (state, action) => {
            state.getIistItemBasket = {
                currentPage: state.getIistItemBasket.currentPage,
                data: [...state.getIistItemBasket.data.filter((item) => item.product.id !== action.meta.arg)],
                totalPages: state.getIistItemBasket.totalPages,
                totalPrice: state.getIistItemBasket.totalPrice,
            }
        })
});

