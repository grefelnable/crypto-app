import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const individualCoinSlice = createSlice({
  name: "singleCoin",
  initialState,
  reducers: {
    selectCoin: (state, action) => {
      console.log(action.payload);
      state = action.payload;
      console.log(state);
    },
  },
});

export const { selectCoin } = individualCoinSlice.actions;

export default individualCoinSlice.reducer;
