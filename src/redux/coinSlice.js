import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// for production only; delete after
import faker from "../faker";
// const initialState = faker;
//

// get user currency setting from local storage
const getCurrency = () => {
  const initialData = {
    name: "usd",
    symbol: "$",
  };
  const currency = `${window?.localStorage?.getItem("currency")}`;
  if (currency === "null") return initialData;

  return JSON.parse(currency);
};
const currency = getCurrency();

const BASE_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`;

// Initial state for coins data
const initialState = {
  coins: [],
  status: "idle",
  error: "",
};

// Fetch coins from API
export const fetchCoins = createAsyncThunk("coins/fetchCoins", async () => {
  const response = await axios.get(BASE_URL);
  return response?.data;
});
export const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    sortName: (state, action) => {
      const coinsForSort = [...action.payload];
      console.log(action.payload);
      state.coins = coinsForSort.sort((a, b) => (a.name > b.name ? 1 : -1));
      console.log(state.coins);
    },
    sortPrice: (state, action) => {
      const coinsForSort = [...action.payload];
      state.coins = coinsForSort.sort((a, b) =>
        a.current_price > b.current_price ? 1 : -1
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCoins.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.coins = action.payload;
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { sortName, sortPrice } = coinSlice.actions;

export default coinSlice.reducer;
