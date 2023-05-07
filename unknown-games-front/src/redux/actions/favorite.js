import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../api/Api";


export const addFavoriteGame = createAsyncThunk("favorite/addFavoriteGame", async (id) => {
    try {
        const {data} = await Api.addFavoriteGame(id);
        return data;
    } catch (e) {
        return e.response.data;
    }
});

export const getAllItemFavorite = createAsyncThunk("favorite/getAllItemFavorite", async (page) => {
    try {
        const {data} = await Api.getAllItemFavorite(page);
        return data;
    } catch (e) {
        return e.response.data;
    }
});

export const deleteItemFavorite = createAsyncThunk("favorite/deleteItemFavorite", async (id) => {
    try {
        const {data} = await Api.deleteItemFavorite(id);
        return data;
    } catch (e) {
        return e.response.data;
    }
});

export const lastfavorite = createAsyncThunk("favorite/lastfavorite", async () => {
    try {
        const {data} = await Api.lastfavorite();
        return data;
    } catch (e) {
        return e.response.data;
    }
});



