import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../api/Api";

export const getClientSecret = createAsyncThunk("payment/getClientSecret", async (id) => {
   try {
       const {data} = await Api.getClientSecret(id);
       return data;
   } catch (e){
   }
});

export const paymentConfirm = createAsyncThunk("payment/paymentConfirm", async (paymentIntent) => {
    const {data} = await Api.paymentConfirm(paymentIntent);
    return data;
});

export const addItemBasket = createAsyncThunk("payment/addItemBasket", async (id) => {
    const {data} = await Api.addItemBasket(id);
    return data;
});

export const deleteItemBasket = createAsyncThunk("payment/deleteItemBasket", async (id) => {
    const {data} = await Api.deleteItemBasket(id);
    return data;
});

export const deleteItemBasketSingle = createAsyncThunk("payment/deleteItemBasketSingle", async (id) => {
    const {data} = await Api.deleteItemBasket(id);
    return data;
});

export const listItemBasket = createAsyncThunk("payment/listItemBasket", async (page) => {
    const {data} = await Api.listItemBasket(page);
    return data;
});

export const getBasketSecret = createAsyncThunk("payment/getBasketSecret", async () => {
    const {data} = await Api.getBasketSecret();
    return data;
});

export const paymentConfirmBasket = createAsyncThunk("payment/paymentConfirmBasket", async (paymentIntent) => {
    const {data} = await Api.paymentConfirmBasket(paymentIntent);
    return data;
});







