import { createSlice } from "@reduxjs/toolkit";

const getSelectedCoin = () => {
  const coin = `${window?.localStorage?.getItem("coin")}`;
  if (coin === "null") return "";

  return JSON.parse(coin);
};

const initialState = getSelectedCoin();

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
