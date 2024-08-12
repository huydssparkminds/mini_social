import { TypeUser } from "@/models/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "@/data/data.json";

type Init = {
  customer: TypeUser[];
};

const initialState: Init = {
  customer: data.users,
};

const userSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<TypeUser>) => {
      state.customer.push(action.payload);
    },
  },
});
export const selectUserById = (state: { customer: Init }, userId: number | string) =>
  state.customer.customer.find(user => user.id === userId);
// export const {  } = userSlice.actions;
export default userSlice.reducer;
