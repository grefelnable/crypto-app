import { createSlice } from "@reduxjs/toolkit";

// for production only; delete after
import faker from "../faker";
const initialState = faker;
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

console.log(currency);

const BASE_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`;

console.log(BASE_URL);

// Sort coin name alphabetically
const handleSortName = () => {
  const coinForSort = [...initialState];
  const sortByName = coinForSort.sort((a, b) => (a.name > b.name ? 1 : -1));
  return sortByName;
};

export const coinSlice = createSlice({
  name: "coinData",
  initialState,
  reducers: {
    sortName: (state) => (state = handleSortName()),
  },
});

export const { sortName } = coinSlice.actions;

export default coinSlice.reducer;
