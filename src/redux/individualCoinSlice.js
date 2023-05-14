import { createSlice } from "@reduxjs/toolkit";

const getSelectedCoin = () => {
  const coin = `${window?.localStorage?.getItem("coin")}`;
  if (coin === "null") return "";

  return coin;
};

// const initialState = getSelectedCoin();
const initialState = "bitcoin";

export const individualCoinSlice = createSlice({
  name: "singleCoin",
  initialState,
  reducers: {
    selectCoin: (state, action) => (state = action.payload),
  },
});

export const { selectCoin } = individualCoinSlice.actions;

export default individualCoinSlice.reducer;
