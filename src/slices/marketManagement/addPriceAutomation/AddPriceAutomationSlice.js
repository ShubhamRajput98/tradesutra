import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

const addPriceAutomationSlice = createSlice({
    name: "addPriceAutomation",
    initialState: { ...initialState },
    reducers: {
        onLoadData(state, action) {
            state.data = action.payload.data
        }
    },
});

export const addPriceAutomationActions = addPriceAutomationSlice.actions;

export default addPriceAutomationSlice;
