import { createSlice } from '@reduxjs/toolkit';

import { getContacts } from './contactsOperation';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
      filter: '',
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = payload;
      })
      .addCase(getContacts.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      });
  },
  reducers: {
    addContact(state, action) {
      state.contacts.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        el => el.id !== action.payload
      );
    },
    filterContacts(state, action) {
      state.contacts.filter = action.payload;
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;
