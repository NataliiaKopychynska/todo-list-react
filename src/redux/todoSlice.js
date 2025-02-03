import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  addItemThunk,
  deleteItemThunk,
  editItemThunk,
  fetchItemThunk,
  toggleCompleteThunk,
} from "./contactsOps";

const initialState = {
  lists: [],
  filter: "",
  isLoading: false,
  isError: null,
  completed: false,
};

export const listsSlice = createSlice({
  name: "lists",
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
      .addCase(fetchItemThunk.fulfilled, (state, action) => {
        state.lists = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchItemThunk.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchItemThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addItemThunk.fulfilled, (state, action) => {
        state.lists.push(action.payload);
        state.isLoading = false;
      })
      .addCase(deleteItemThunk.fulfilled, (state, action) => {
        state.lists = state.lists.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(editItemThunk.fulfilled, (state, action) => {
        const index = state.lists.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.lists[index] = action.payload;
        }
      })
      .addCase(toggleCompleteThunk.fulfilled, (state, action) => {
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

export default listsSlice.reducer;

export const selectList = (state) => state.lists.lists;
export const selectIsLoading = (state) => state.lists.isLoading;
export const selectIsError = (state) => state.lists.isError;
export const selectFilter = (state) => state.lists?.filter ?? "";

export const { setLoading, setError, fetchDataSuccess, setFilter } =
  listsSlice.actions;

export const selectFilterLists = createSelector(
  [selectList, selectFilter],
  (lists = [], filter = "") => {
    return lists.filter((item) =>
      item.tittle?.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
