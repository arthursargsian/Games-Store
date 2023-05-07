import {createReducer} from "@reduxjs/toolkit";
import {
    logInAdmin,
    logInUser,
    logOutAdmin,
    registerAdmin,
    registerUsers,
    allUsers, deleteUser
} from "../actions/register";

const initialState = {
    usersData: [],
    usersDataRequestStatus: "",
    logInUserData: [],
    logInUserDataRequestStatus: "",
    logInAdminData: [],
    logInAdminDataRequestStatus: "",
    userToken: localStorage.getItem("userToken") || "",
    adminToken: localStorage.getItem("adminToken") || "",
    allUsers: [],
    allUsersStatus: "",
    allAdmins: [],
    allAdminsStatus: "",
    error: "",
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(registerUsers.pending, (state, action) => {
            state.usersDataRequestStatus = "request";
        })
        .addCase(registerUsers.fulfilled, (state, action) => {
            state.usersData = action.payload.user;
            state.usersDataRequestStatus = "success";
        })
        .addCase(registerUsers.rejected, (state, action) => {
            state.usersDataRequestStatus = "fail";
        })

        .addCase(logInUser.pending, (state, action) => {
            state.logInUserDataRequestStatus = "request";
        })
        .addCase(logInUser.fulfilled, (state, action) => {
            state.error = action.payload;
            if (action.payload.role === "user") {
                localStorage.setItem("userToken", action.payload.token);
                localStorage.setItem("user", JSON.stringify(action.payload));
                state.logInUserData = action.payload;
                state.userToken = action.payload.token;
                state.logInUserDataRequestStatus = "success";
            } else state.logInUserDataRequestStatus = "role is not user";
        })
        .addCase(logInUser.rejected, (state, action) => {
            state.logInUserDataRequestStatus = "fail";
        })
        .addCase(logInAdmin.pending, (state, action) => {
            state.logInAdminDataRequestStatus = "request";
        })
        .addCase(logInAdmin.fulfilled, (state, action) => {
            state.error = action.payload;
            if (action.payload.role === "admin") {
                localStorage.setItem("adminToken", action.payload.token);
                localStorage.setItem("admin", JSON.stringify(action.payload));
                state.logInAdminData = action.payload;
                state.adminToken = action.payload.token;
                state.logInAdminDataRequestStatus = "success";
            } else state.logInAdminDataRequestStatus = "role is not admin";
        })
        .addCase(logInAdmin.rejected, (state, action) => {
            state.logInAdminDataRequestStatus = "fail";
        })
        .addCase(logOutAdmin, (state, action) => {
            localStorage.removeItem("adminToken");
            localStorage.removeItem("admin");
            localStorage.removeItem("userToken");
            localStorage.removeItem("user");
        })
        .addCase(registerAdmin, (state, action) => {
        })
        .addCase(allUsers.pending, (state, action) => {
            state.allUsersStatus = "request";
        })
        .addCase(allUsers.fulfilled, (state, action) => {
            const users = action.payload.filter((i) => i.role === "user");
            state.allUsers = users;
            state.allUsersStatus = "success";
            const admins = action.payload.filter((i) => i.role === "admin");
            state.allAdmins = admins;
            state.allAdminsStatus = "success";
        })
        .addCase(allUsers.rejected, (state, action) => {
            state.allUsersStatus = "fail";
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            state.allUsers = [...state.allUsers.filter((item) => item.uuid !== action.meta.arg)];
        })
});
