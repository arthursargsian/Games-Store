import {createReducer} from "@reduxjs/toolkit";
import {createProduct} from "../actions/upload";

const initialState = {
    error: "",
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(createProduct.rejected, (state, action) => {
            state.error = action.error.message;
        });
});
