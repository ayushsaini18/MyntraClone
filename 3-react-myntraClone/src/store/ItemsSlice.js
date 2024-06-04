import { createSlice } from "@reduxjs/toolkit";
// import {DEFAULT_ITEMS} from '../data/item'
const itemsSlice = createSlice({
  name: 'items',
  initialState: [],//[DEFAULT_ITEMS]
  reducers: {
    addInitialItems: (status, action) => {
     
      return action.payload;
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;
