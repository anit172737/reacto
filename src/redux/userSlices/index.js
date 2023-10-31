import { createSlice } from "@reduxjs/toolkit";

export const userMaster = createSlice({
  name: "userMaster",
  initialState: {
    userData: [],
    search: "",
  },
  reducers: {
    handleLogin: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("isAdmin", action.payload.userData?.isAdmin);
      localStorage.setItem("token", action.payload.token);
    },
  },
});

export const { handleLogin } = userMaster.actions;
export default userMaster.reducer;
