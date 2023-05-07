import { createSlice } from "@reduxjs/toolkit";

// for production only; delete after
import faker from "../faker";

const initialState = faker;

export const coinSlice = createSlice({
  name: "coinData",
  initialState,
});

export default coinSlice.reducer;
