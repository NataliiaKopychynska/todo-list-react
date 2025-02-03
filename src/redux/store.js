import { configureStore } from "@reduxjs/toolkit";
import listsReducer from "./todoSlice";
import listExtraReducer from "./todoSliceExtra";

export const store = configureStore({
  reducer: {
    lists: listsReducer,
    listsExtra: listExtraReducer,
  },
});
