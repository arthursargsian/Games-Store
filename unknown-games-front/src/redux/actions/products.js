import {createAsyncThunk, createAction} from "@reduxjs/toolkit";
import Api from "../../api/Api";

export const productsGames = createAsyncThunk("products/productsGames", async (payload, thunkAPI) => {
    try {
        const {data} = await Api.gamesProducts(payload.page, payload.currentPage);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data)
    }
});

export const single = createAsyncThunk("products/single", async (id) => {
    try {
        const {data} = await Api.singlePage(id);
        return data;
    } catch (e) {
    }
});

export const productsDelete = createAsyncThunk("products/productsDelete", async (id) => {
    try {
        const {data} = await Api.productsDelete(id)
        return data;
    } catch (e) {
    }
});

export const sendRating = createAsyncThunk("products/addCategories", async (payload) => {
    try {
        console.log()
        const {data} = await Api.sendStars(payload.rating, +payload.id);
        return data;
    } catch (e) {
    }
});







