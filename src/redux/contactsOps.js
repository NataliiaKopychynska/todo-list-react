import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://679e396e946b0e23c062e126.mockapi.io";

export const fetchItemThunk = createAsyncThunk(
  "/todoList/fetchItem",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/todoList");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteItemThunk = createAsyncThunk(
  "/todoList/deleteItem",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/todoList/${id}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addItemThunk = createAsyncThunk(
  "/todoList/addContacts",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post("/todoList", body);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editItemThunk = createAsyncThunk(
  "/todoList/editItem",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.put(`/todoList/${body.id}`, body);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleteThunk = createAsyncThunk(
  "/todoList/toggleComplete",
  async ({ id, completed }, thunkAPI) => {
    try {
      const { data } = await axios.put(`/todoList/${id}`, { completed });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
