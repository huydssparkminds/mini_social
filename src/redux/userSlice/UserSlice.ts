import { TypeUser } from "@/models/models";
import { createSlice } from "@reduxjs/toolkit";


const userString = localStorage.getItem("userInfo");
const userInfor = userString ? JSON.parse(userString) : null;
type Init = {
  loading: boolean;
  user: TypeUser | null;
  error: boolean;
  isLoggin: boolean;
};

const initialState: Init = {
  error: false,
  loading: false,
  user: userInfor,
  isLoggin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggin = true;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggin = false;
    },
  },
});

export const { setLoading, login, setError, logout } = userSlice.actions;
export default userSlice.reducer;
