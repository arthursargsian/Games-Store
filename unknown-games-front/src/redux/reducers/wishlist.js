import {createReducer} from "@reduxjs/toolkit";
import {getWishList, deleteWishListItem, addWishListItem} from "../actions/wishlist";

const initialState = {
    wishlist: [],
    wishlistStatus: "",
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(getWishList.pending, (state, action) => {
            state.wishlistStatus = "request";
        })
        .addCase(getWishList.fulfilled, (state, action) => {
            state.wishlist = action.payload;
            state.wishlistStatus = "success";
            console.log(state.wishlist, 122)
            console.log(state.wishlist.currentPage)
        })
        .addCase(getWishList.rejected, (state, action) => {
            state.wishlistStatus = "fail";
        })
        .addCase(deleteWishListItem.pending, (state, action) => {
            state.wishlist = {
                currentPage: state.wishlist.currentPage,
                data: [...state.wishlist.data.filter((item) => item.productId !== action.meta.arg)],
                totalPages: state.wishlist.totalPages
            }
        })
});


