import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

// Actual API from coingecko.com
const BASE_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`;

// fetching Fake Api for production
const FAKE_URL = "http://localhost:3030/data";

// Initial state for coins data
const initialState = {
  coins: [],
  status: "idle",
  error: "",
};

// Fetch coins from API
export const fetchCoins = createAsyncThunk("coins/fetchCoins", async () => {
  // const response = await axios.get(BASE_URL);
  const response = await axios.get(FAKE_URL);
  // console log
  console.log(response?.data);
  return response?.data;
});
export const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    sortName: (state, action) => {
      const coinsForSort = [...action.payload];
      state.coins = coinsForSort.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    sortPrice: (state, action) => {
      const coinsForSort = [...action.payload];
      state.coins = coinsForSort.sort((a, b) =>
        a.current_price > b.current_price ? 1 : -1
      );
    },
    sortHourlyPercentage: (state, action) => {
      const coinsForSort = [...action.payload];
      state.coins = coinsForSort.sort((a, b) =>
        a.price_change_percentage_1h_in_currency >
        b.price_change_percentage_1h_in_currency
          ? 1
          : -1
      );
    },
    sortDailyPercentage: (state, action) => {
      const coinsForSort = [...action.payload];
      state.coins = coinsForSort.sort((a, b) =>
        a.price_change_percentage_24h_in_currency >
        b.price_change_percentage_24h_in_currency
          ? 1
          : -1
      );
    },
    sortWeeklyPercentage: (state, action) => {
      const coinsForSort = [...action.payload];
      state.coins = coinsForSort.sort((a, b) =>
        a.price_change_percentage_7d_in_currency >
        b.price_change_percentage_7d_in_currency
          ? 1
          : -1
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

export const {
  sortName,
  sortPrice,
  sortHourlyPercentage,
  sortDailyPercentage,
  sortWeeklyPercentage,
} = coinSlice.actions;

export default coinSlice.reducer;
