import { getContactsApi } from 'services/Api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getContactsApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
