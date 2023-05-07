import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../api/Api";

export const sendComment = createAsyncThunk("products/sendComment", async (payload) => {
    try {
        const {data} = await Api.sendComment(payload.id, payload.comment);

        return data;
    } catch (e) {
    }
});

export const getComments = createAsyncThunk("products/getComments", async (id) => {
    try {
        const {data} = await Api.getComments(id);
        return data;
    } catch (e) {
    }
});
