import {createReducer} from "@reduxjs/toolkit";
import {productsGames, single, productsDelete} from "../actions/products";
import {addWishListItem, deleteWishListItemSingle} from "../actions/wishlist";
import {addItemBasket, deleteItemBasketSingle} from "../actions/payment";
import {addFavoriteGame, deleteItemFavorite} from "../actions/favorite";

const initialState = {
    productsData: [],
    productsDataRequestStatus: "",
    singleData: [],
    singleDataRequestStatus: "",
    deleteCategoryItem: "",
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(productsGames.pending, (state, action) => {
            state.productsDataRequestStatus = "request";
        })
        .addCase(productsGames.fulfilled, (state, action) => {
            state.productsData = action.payload;
            state.productsDataRequestStatus = "success";
        })
        .addCase(productsGames.rejected, (state, action) => {
            state.productsDataRequestStatus = "fail";
        })
        .addCase(single.pending, (state, action) => {
            state.singleDataRequestStatus = "request";
        })
        .addCase(single.fulfilled, (state, action) => {
            state.singleData = action.payload;
            state.singleDataRequestStatus = "success";
        })
        .addCase(single.rejected, (state, action) => {
            state.singleDataRequestStatus = "fail";
        })
        .addCase(productsDelete.fulfilled, (state, action) => {
            state.productsData = [...state.productsData.data.filter((item) => item.id !== action.meta.arg)]
        })
        .addCase(addWishListItem.pending, (state) => {
            state.singleData = {...state.singleData, wishlist: {count: true}}
        })
        .addCase(deleteWishListItemSingle.pending, (state) => {
            state.singleData = {...state.singleData, wishlist: {count: false}}
        })
        .addCase(addItemBasket.pending, (state, action) => {
            state.singleData = {...state.singleData, basket: {count: true}}
        })
        .addCase(deleteItemBasketSingle.pending, (state) => {
            state.singleData = {...state.singleData, basket: {count: false}}
        })
        .addCase(deleteItemFavorite.pending, (state) => {
            state.singleData = {...state.singleData, favorite: {count: false}}
        })
        .addCase(addFavoriteGame.pending, (state, action) => {
            state.singleData = {...state.singleData, favorite: {count: true}}
        })
});


