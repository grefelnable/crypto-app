import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme/themeSlice";

export const store = configureStore({
  reducer: {
    theme,
  },
});
