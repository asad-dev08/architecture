// src/redux/themeSlice.js

import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: {
      colorBgBase: "#ffffff",
      colorPrimary: "#652B82",
      colorInfo: "#652B82",
      colorLink: "#ea580c",
      colorTextBase: "#000000",
      colorSuccess: "#16a34a",
      colorWarning: "#ca8a04",
      colorError: "#dc2626",
      colorBgHeader: "red",
    },
  },
  reducers: {
    setCurrentTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setCurrentTheme } = themeSlice.actions;
export default themeSlice.reducer;
