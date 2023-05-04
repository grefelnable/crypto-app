import { createSlice } from "@reduxjs/toolkit";

// initial state as USD
const initialState = {
  name: "usd",
  symbol: "$",
};

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
