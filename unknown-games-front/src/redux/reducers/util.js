import {createReducer} from "@reduxjs/toolkit";
import {
    carousel,
    coverProduct,
    dashboardSearch,
    deleteCategory,
    indexCat,
    indexCategoreis,
    paginateGenerator
} from "../actions/util";

const initialState = {
    search: "",
    page: "",
    cover: "",
    carouselList: [],
    carouselListStatus: false,
    categoreisIndex: 0,
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(dashboardSearch, (state, action) => {
            state.search = action.payload;
        })
        .addCase(paginateGenerator, (state, action) => {
            state.page = action.payload;
        })
        .addCase(coverProduct, (state, action) => {
            state.cover = action.payload
        })
        .addCase(carousel.pending, (state, action) => {
            state.carouselListStatus = false;
        })
        .addCase(carousel.fulfilled, (state, action) => {
            state.carouselList = action.payload;
        })
        .addCase(carousel.rejected, (state, action) => {
            state.carouselListStatus = false;
        })
});
