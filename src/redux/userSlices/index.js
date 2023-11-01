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
    handleLogout: (state, action) => {
      localStorage.clear();
      // Revoke the Google authentication token
      const auth2 = window.gapi.auth2.getAuthInstance();
      if (auth2 != null) {
        auth2.signOut().then(() => {
          console.log("Google token revoked");
          // Clear user data in your application (e.g., remove tokens from local storage)
        });
      }
    },
  },
});

export const { handleLogin, handleLogout } = userMaster.actions;
export default userMaster.reducer;
