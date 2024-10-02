import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://66f433ad77b5e8897098bc1f.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, { rejectWithValue }) => {
    try {
      const response = await axios.post(baseURL, newContact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${baseURL}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
