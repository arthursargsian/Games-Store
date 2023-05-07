import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../api/Api";

export const registerUsers = createAsyncThunk("register/registerUsers", async (payload) => {
    try {
        const {data} = await Api.register(payload);
        return data;
    } catch (e) {

    }
});

export const logInUser = createAsyncThunk("register/logInUser", async (payload) => {
    try {
        const {data} = await Api.logiInUserRoot(payload);
        return data;
    } catch (e) {
        return e.response.data.msg;
    }
});

export const logInAdmin = createAsyncThunk("register/logInAdmin", async (payload) => {
    try {
        const {data} = await Api.logiInAdminRoot(payload);
        return data;
    } catch (e) {
        return e.response.data.msg;
    }
});

export const logOutAdmin = createAction("register/logOutAdmin");

export const registerAdmin = createAsyncThunk("register/registerAdmin", async (payload) => {
    try {
        const {data} = Api.createAdmin(payload);
        return data;
    } catch (e) {

    }
});

export const allUsers = createAsyncThunk("register/allUsers", async () => {
    try {
        const {data} = await Api.getAllUsers();
        return data;
    } catch (e) {

    }
});

export const forgetPassword = createAsyncThunk("register/forgetPassword", async (email) => {
    try {
        const {data} = await Api.forgetPassword(email);
        return data;
    } catch (e) {

    }
});

export const resetPassword = createAsyncThunk("register/resetPasswprd", async (payload) => {
    try {
        const {data} = await Api.resetPassword(payload.confPassword, payload.password, payload.token);
        return data;
    } catch (e) {
    }
});

export const deleteUser = createAsyncThunk("register/deleteUser", async (id) => {
    try {
        const {data} = await Api.deleteUser(id);
        return data;
    } catch (e) {
    }
});






