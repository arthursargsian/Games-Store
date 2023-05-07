import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../api/Api";

export const indexCat = createAction("util/coverProduct", (index) => {
    try {
        return {
            payload: {
                index,
            }
        }
    } catch (e) {
    }
});

export const getCategoriesList = createAsyncThunk("products/getCategoriesList", async (category) => {
    try {
        const {data} = await Api.getCategoriesList(category.name, category.page);
        return data;
    } catch (e) {
    }
});

export const getCategories = createAsyncThunk("products/getCategories", async () => {
    try {
        const {data} = await Api.getCategories();
        return data;
    } catch (e) {

    }
});

export const addCategories = createAsyncThunk("products/addCategories", async (name) => {
    try {
        const {data} = await Api.addCategories(name);
        return data;
    } catch (e) {
    }
});

export const deleteCategory = createAsyncThunk("upload/deleteCategory", async (name) => {
    const {data} = await Api.deleteCategory(name);
    return data;
});
