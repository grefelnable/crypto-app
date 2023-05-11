import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme/themeSlice";
import currencySlice from "./currencySlice";
import coinSlice from "./coinSlice";

export default configureStore({
  reducer: {
    theme: themeSlice,
    currency: currencySlice,
    coins: coinSlice,
  },
});
