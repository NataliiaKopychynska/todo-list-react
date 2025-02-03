import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  addItemExtraThunk,
  deleteItemExtraThunk,
  editItemExtraThunk,
  fetchItemExtraThunk,
  toggleCompleteExtraThunk,
} from "./todoListExtraOps.js";

const initialState = {
  lists: [],
  filter: "",
  isLoading: false,
  isError: null,
  completed: false,
};

export const extraListsSlice = createSlice({
  name: "ExtraLists",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
    fetchDataSuccess: (state, action) => {
      state.lists = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemExtraThunk.fulfilled, (state, action) => {
        console.log("Fetched data:", action.payload);
        state.lists = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchItemExtraThunk.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchItemExtraThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addItemExtraThunk.fulfilled, (state, action) => {
        state.lists.push(action.payload);
        state.isLoading = false;
      })
      .addCase(deleteItemExtraThunk.fulfilled, (state, action) => {
        state.lists = state.lists.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(editItemExtraThunk.fulfilled, (state, action) => {
        const index = state.lists.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.lists[index] = action.payload;
        }
      })
      .addCase(toggleCompleteExtraThunk.fulfilled, (state, action) => {
        const index = state.lists.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.lists[index].completed = action.payload.completed;
        }
      });
  },
});

// export const selectFilterLists = (state) => {
//   const { lists = [], filter = "" } = state.lists || {};
//   return lists.filter((item) =>
//     item.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

export default extraListsSlice.reducer;

export const selectListExtra = (state) => state.ExtraLists?.lists || [];
export const selectIsLoadingExtra = (state) => state.ExtraLists.isLoading;
export const selectIsErrorExtra = (state) => state.ExtraLists.isError;
export const selectFilterExtra = (state) => state.ExtraLists.filter;

export const { setLoading, setError, fetchDataSuccess, setFilter } =
  extraListsSlice.actions;

// export const selectFilterListsExtra = createSelector(
//   [selectListExtra, selectFilterExtra],
//   (lists = [], filter = "") => {
//     return lists.filter((item) =>
//       item.tittle?.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
export const selectFilterListsExtra = createSelector(
  (state) => state.ExtraLists?.lists || [],
  (state) => state.ExtraLists?.filter || "",
  (lists, filter) => {
    if (!filter) return lists;
    return lists.filter((item) =>
      item.tittle?.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
