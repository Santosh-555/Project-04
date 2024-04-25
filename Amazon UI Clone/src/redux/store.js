/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
