import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../api/Api";


export const createProduct = createAsyncThunk("upload/createProduct", async (payload) => {
    try {
        const {data} = await Api.createProduct(payload.productData, payload.genre);
        return data;
    } catch (e) {
        return e.response.data;
    }
});


export const updateProduct = createAsyncThunk("upload/updateProduct", async (payload) => {
    try {
        const {data} = await Api.updateProduct(payload.productData, payload.genre, payload.id);
        return data;
    } catch (e) {
        return e.response.data;
    }
});

export const uploadCover = createAsyncThunk("upload/UploadCover", async (payload) => {
    setTimeout(async () => {
        const {data} = await Api.uploadCover(payload.cover, payload.productData.name);
        return data;
    }, 1000);
});

export const uploadImages = createAsyncThunk("upload/uploadImages", async (payload) => {
    setTimeout(async () => {
        const {data} = await Api.uploadImages(payload.images, payload.productData.name);
        return data;
    }, 1000);
});

export const  uploadTorrent = createAsyncThunk("upload/uploadTorrent", async (payload) => {
    setTimeout(async () => {
        const {data} = await Api.uploadTorrent(payload.torrent, payload.productData.name);
        return data;
    }, 1000);
});

