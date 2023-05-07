import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../api/Api";

export const searchProducts = createAsyncThunk("products/searchProducts", async (name) => {
    try {
        const {data} = await Api.search(name);
        return data;
    } catch (e) {
    }
});
export const searchInp = createAction("searchInp/searchInp", (value) => {
    try {
        return {
            payload: {
                value,
            }
        }
    } catch (e) {
    }
});
