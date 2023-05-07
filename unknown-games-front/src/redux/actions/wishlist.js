import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../api/Api";

export const getWishList = createAsyncThunk("products/getWishList", async (page) => {
    try {
        const {data} = await Api.getWishList(page);
        return data;
    } catch (e) {
    }
});

export const deleteWishListItem = createAsyncThunk("wishlist/deleteWishListItem", async (payload) => {
    try {
        const {data} = await Api.deleteWishListItem(payload);
        return data;
    } catch (e) {
    }
});

export const deleteWishListItemSingle = createAsyncThunk("wishlist/deleteWishListItemSingle", async (payload) => {
    try {
        const {data} = await Api.deleteWishListItem(payload);
        return data;
    } catch (e) {
    }
});

export const addWishListItem = createAsyncThunk("products/addWishListItem", async (id) => {
    try {
        const {data} = await Api.addWishListItem(id);
        return data;
    } catch (e) {
    }
});
