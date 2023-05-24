import { createSlice } from "@reduxjs/toolkit";

const initialState = "shiba-inu";

export const individualCoinSlice = createSlice({
  name: "singleCoin",
  initialState,
  reducers: {
    selectCoin: (state, action) => (state = action.payload),
  },
});

export const { selectCoin } = individualCoinSlice.actions;

export default individualCoinSlice.reducer;
