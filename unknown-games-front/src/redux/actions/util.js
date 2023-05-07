import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../api/Api";

export const dashboardSearch = createAction("util/searchInp", (value) => {
    try {
        return {
            payload: {
                value,
            }
        }
    } catch (e) {
    }
});

export const paginateGenerator = createAction("util/paginateGenerator", (page) => {
    try {
        return {
            payload: {
                page,
            }
        }
    } catch (e) {
    }
});

export const deleteComments = createAsyncThunk("upload/deleteComments", async (id) => {
    const {data} = await Api.deleteComments(id);
    return data;
});

export const coverProduct = createAction("util/coverProduct", (cover) => {
    try {
        return {
            payload: {
                cover,
            }
        }
    } catch (e) {
    }
});

export const carousel = createAsyncThunk("upload/carousel", async () => {
    const {data} = await Api.carousel();
    return data;
});



