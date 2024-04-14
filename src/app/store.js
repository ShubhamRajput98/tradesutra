import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../slices/login/LoginSlice";
import addNewTipSlice from "../slices/manageTips/addManageTipsSlice/AddNewTipsSlice";


export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    addNewTips: addNewTipSlice.reducer,
  },
});
