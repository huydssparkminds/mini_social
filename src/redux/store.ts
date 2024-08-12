import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/UserSlice";
import customerReducer from "./customerSlice/customerSlice";
import postReducer from "./PostSlice/postSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    customer: customerReducer,
    post: postReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
