import { createSlice } from "@reduxjs/toolkit";

export const userMaster = createSlice({
  name: "userMaster",
  initialState: {
    userList: [],
    search: "",
  },
  reducers: {
    searchUser: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { searchUser } = userMaster.actions;
export default userMaster.reducer;
