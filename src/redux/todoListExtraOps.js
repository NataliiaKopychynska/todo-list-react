import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://679e396e946b0e23c062e126.mockapi.io/";

export const fetchItemExtraThunk = createAsyncThunk(
  "/todoListWoman/fetchItemExtra",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/todoListWoman");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteItemExtraThunk = createAsyncThunk(
  "/todoListWoman/deleteItemExtra",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/todoListWoman/${id}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addItemExtraThunk = createAsyncThunk(
  "/todoListWoman/addContactsExtra",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post("/todoListWoman", body);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editItemExtraThunk = createAsyncThunk(
  "/todoListWoman/editItemExtra",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.put(`/todoListWoman/${body.id}`, body);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleteExtraThunk = createAsyncThunk(
  "/todoListWoman/toggleCompleteExtra",
  async ({ id, completed }, thunkAPI) => {
    try {
      const { data } = await axios.put(`/todoListWoman/${id}`, { completed });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
