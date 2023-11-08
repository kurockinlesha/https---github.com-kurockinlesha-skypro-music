import { createSlice } from "@reduxjs/toolkit";

const AUTH_INFO = "auth";

function getAuthFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_INFO));
  } catch (error) {
    console.error(error);
    return null;
  }
}

const initialState = {
  access: null,
  refresh: null,
  user: null,
};

export const authSlice = createSlice({
  name: "authReduces",
  initialState: getAuthFromLocalStorage() ?? initialState,

  reducers: {
    setAuth: (state, action) => {
      const { access, refresh, user } = action.payload ?? initialState;
      state.access = access;
      state.refresh = refresh;
      state.user = user;

      localStorage.setItem(AUTH_INFO, JSON.stringify(state));
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
