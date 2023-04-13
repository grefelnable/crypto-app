import { createSlice } from "@reduxjs/toolkit";

// If there's none, try from system settings
const getTheme = () => {
  // Get theme from local storage
  const theme = `${window?.localStorage?.getItem("theme")}`;
  if (["light", "dark"].includes(theme)) return theme;

  // Use dark theme if there's no settings.
  const userMedia = window.matchMedia("(prefers-color-scheme: light)");
  if (userMedia.matches) return "light";

  return "dark";
};

const initialState = getTheme();

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    set: (state, action) => action.payload,
  },
});

export const { set } = themeSlice.actions;

export default themeSlice.reducer;
