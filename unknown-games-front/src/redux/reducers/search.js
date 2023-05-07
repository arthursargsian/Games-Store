import {createReducer} from "@reduxjs/toolkit";
import {searchProducts, searchInp} from "../actions/search";

const initialState = {
    searchResult: [],
    searchResultRequestStatus: "",
    search: "",
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(searchProducts.pending, (state, action) => {
            state.searchResultRequestStatus = "request";
        })
        .addCase(searchProducts.fulfilled, (state, action) => {
            state.searchResult = action.payload;
            state.searchResultRequestStatus = "success";
        })
        .addCase(searchProducts.rejected, (state, action) => {
            state.searchResultRequestStatus = "fail";
        })
        .addCase(searchInp, (state, action) => {
            state.search = action.payload;
        })
});


