import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./reducers/habitSlice";

const store = configureStore({
  reducer: {
    habits: habitReducer,
  },
});
export default store;