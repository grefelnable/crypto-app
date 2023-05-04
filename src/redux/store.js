import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme/themeSlice";
import currencySlice from "./currencySlice";

export default configureStore({
  reducer: {
    theme: themeSlice,
    currency: currencySlice,
  },
});
