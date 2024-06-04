import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./ItemsSlice";
import fetchStatusSlice from "./FetchStatusSlice";
import bagSlice from "./BagSlice";
const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus:fetchStatusSlice.reducer,
    bag:bagSlice.reducer,
  },
});

export default myntraStore;
