/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitState = {
  isUser: boolean;
  user: User;
};

const initialState: InitState = {
  isUser: false,
  user: {
    id: "",
    name: "",
    email: "",
    image: "",
    createdAt: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<InitState>) => {
      state.isUser = action.payload.isUser;
      state.user = action.payload.user;
    },

    logout: (state) => {
      state.isUser = false;
      state.user = {
        id: "",
        name: "",
        email: "",
        image: "",
        createdAt: "",
      };
    },
  },
});

export const { setProfile, logout } = userSlice.actions;

export default userSlice.reducer;
