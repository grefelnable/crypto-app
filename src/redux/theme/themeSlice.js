import { createSlice } from "@reduxjs/toolkit";

// Get theme settings from local storage
const getTheme = () => {
  const theme = `${window?.localStorage?.getItem("theme")}`;
  if (["light", "dark"].includes(theme)) {
    return theme;
  }
  const userMedia = window.matchMedia("(prefers-color-scheme: light)");
  if (userMedia.matches) {
    return "light";
  }

  return "dark";
};

const initialState = getTheme();

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (action) => action.payload,
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
