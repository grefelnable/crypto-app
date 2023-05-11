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
  console.log(response);
  return response?.data;
});

// Sort coin name alphabetically
const handleSortName = () => {
  const coinForSort = [...initialState];
  const sortByName = coinForSort.sort((a, b) => (a.name > b.name ? 1 : -1));
  return sortByName;
};

export const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    sortName: (state) => (state = handleSortName()),
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCoins.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.coins = state.coins.concat(action.payload);
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Selectors
export const selectAllCoins = (state) => state.coins.coins;
export const getCoinsStatus = (state) => state.coins.status;
export const getCoinsError = (state) => state.coins.error;

export const { sortName } = coinSlice.actions;

export default coinSlice.reducer;
