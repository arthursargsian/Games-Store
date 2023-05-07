import {createReducer} from "@reduxjs/toolkit";
import {getAllItemFavorite, lastfavorite} from "../actions/favorite";

const initialState = {
    favoriteList: [],
    favoriteListStatus: false,
    lastFavoriteList: [],
    lastFavoriteListStatus: false,
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(getAllItemFavorite.pending, (state, action) => {
            state.favoriteListStatus = false;
        })
        .addCase(getAllItemFavorite.fulfilled, (state, action) => {
            state.favoriteList = action.payload;
            state.favoriteListStatus = true;
        })
        .addCase(getAllItemFavorite.rejected, (state, action) => {
            state.favoriteListStatus = false;
        })
        .addCase(lastfavorite.pending, (state, action) => {
            state.lastFavoriteListStatus = false;
        })
        .addCase(lastfavorite.fulfilled, (state, action) => {
            state.lastFavoriteList = action.payload;
            state.lastFavoriteListStatus = true;
        })
        .addCase(lastfavorite.rejected, (state, action) => {
            state.lastFavoriteListStatus = false;
        });
});
