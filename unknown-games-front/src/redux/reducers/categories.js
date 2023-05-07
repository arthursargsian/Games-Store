import {createReducer} from "@reduxjs/toolkit";
import {addCategories, deleteCategory, getCategories, getCategoriesList, indexCat} from "../actions/categories";

const initialState = {
    categoriesList: [],
    categoriesStatus: "",
    categoriesProductList: [],
    categoriesProductStatus: "",
    categoreisIndex: 0,
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(getCategories.pending, (state, action) => {
            state.categoriesStatus = "request";
        })
        .addCase(getCategories.fulfilled, (state, action) => {
            state.categoriesList = action.payload;
            state.categoriesStatus = "success";
        })
        .addCase(getCategories.rejected, (state, action) => {
            state.categoriesStatus = "fail";
        })
        .addCase(getCategoriesList.pending, (state, action) => {
            state.categoriesProductStatus = "request";
        })
        .addCase(getCategoriesList.fulfilled, (state, action) => {
            state.categoriesProductList = action.payload;
            state.categoriesProductStatus = "success";
        })
        .addCase(getCategoriesList.rejected, (state, action) => {
            state.categoriesProductStatus = "fail";
        })
        .addCase(indexCat, (state, action) => {
            state.categoreisIndex = action.payload;
        })
        .addCase(addCategories.fulfilled, (state, action) => {
            const now = new Date();
            const isoString = now.toISOString();
            state.categoriesList = [...state.categoriesList,
                {
                    id: state.categoriesList.length + 1,
                    name: action.meta.arg,
                    createdAt: isoString,
                    updatedAt: isoString,
                }
            ];
        })
        .addCase(deleteCategory.fulfilled, (state, action) => {
            state.categoriesList = [...state.categoriesList.filter((item) => item.name !== action.meta.arg)];
        })
});


