import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const addNewTipSlice = createSlice({
  name: "addNewTips",
  initialState: { ...initialState },
  reducers: {
    onLoadData(state, action) {
      console.log(action.payload)
    }
  },
});

export const addNewTipsActions = addNewTipSlice.actions;

export default addNewTipSlice;
