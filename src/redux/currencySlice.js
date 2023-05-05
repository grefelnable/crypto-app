import { createSlice } from "@reduxjs/toolkit";

const getCurrency = () => {
  const initialData = {
    name: "usd",
    symbol: "$",
  };
  const currency = `${window?.localStorage?.getItem("currency")}`;
  console.log(currency);
  if (currency === "null") return initialData;

  return JSON.parse(currency);
};

// initial state as USD
const initialState = getCurrency();

// user selected currency
const userCurrency = (selectedCurrency) => {
  if (selectedCurrency === "cad") {
    return {
      name: "cad",
      symbol: "C$",
    };
  } else if (selectedCurrency === "gbp") {
    return {
      name: "gbp",
      symbol: "£",
    };
  } else if (selectedCurrency === "eur") {
    return {
      name: "eur",
      symbol: "€",
    };
  } else return initialState;
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeCurrency: (state, action) => (state = userCurrency(action.payload)),
  },
});

console.log(initialState);

export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;
