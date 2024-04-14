import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loginError: ""
};

const loginSlice = createSlice({
    name: "login",
    initialState: { ...initialState },
    reducers: {
        onLogin(state, action) {
            state.data = action.payload.data
        },
        onError(state, action) {
            state.loginError = action.payload.data
        }
    },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
