import {createReducer} from "@reduxjs/toolkit";
import {sendComment, getComments,} from "../actions/comments";
import _ from 'lodash';
import Utils from "../../Utils";

const initialState = {
    comment: [],
    commentStatus: "",
    commentsList: [],
    commentsStatus: "",
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(sendComment.pending, (state, action) => {
            state.commentStatus = "request";
        })
        .addCase(sendComment.fulfilled, (state, action) => {
            state.commentsList = [...state.commentsList, {
                id: state.commentsList.length + 1,
                firstName: Utils.getUser().name,
                lastName: Utils.getUser().lastName,
                message: action.meta.arg.comment,
            }];
            state.comment = action.payload;
            state.commentStatus = "success";
        })
        .addCase(sendComment.rejected, (state, action) => {
            state.commentStatus = "fail";
        })
        .addCase(getComments.pending, (state, action) => {
            state.commentsStatus = "request";
        })
        .addCase(getComments.fulfilled, (state, action) => {
            state.commentsList = action.payload;
            state.commentsStatus = "success";
        })
        .addCase(getComments.rejected, (state, action) => {
            state.commentsStatus = "fail";
        })
});


