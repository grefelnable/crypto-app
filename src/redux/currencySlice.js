import { createSlice } from "@reduxjs/toolkit";

const initialState = "usd";

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeCurrency: (state, action) => (state = action.payload),
  },
});

export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;
