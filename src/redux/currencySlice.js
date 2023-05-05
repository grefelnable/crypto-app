import { createSlice } from "@reduxjs/toolkit";

const getCurrency = () => {
  const initialData = {
    name: "usd",
    symbol: "$",
  };
  const currency = `${window?.localStorage?.getItem("currency")}`;
  if (["usd", "cad", "eur", "gbp"].includes(currency))
    return JSON.parse(currency);

  return initialData;
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

export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;
