import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './constactsSlice';

export const store = configureStore({
  reducer: contactsReducer,
});
