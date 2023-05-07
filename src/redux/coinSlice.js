import { createSlice } from "@reduxjs/toolkit";

// for production only; delete after
import faker from "../faker";
const initialState = faker;
//

const handleSortName = () => {
  const coinForSort = [...initialState];
  const sortByName = coinForSort.sort((a, b) => (a.name > b.name ? 1 : -1));
  console.log(sortByName);
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
