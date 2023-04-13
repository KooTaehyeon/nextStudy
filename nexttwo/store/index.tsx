import { configureStore, createSlice, createStore } from '@reduxjs/toolkit';
import { counterSile } from './counterSlice';
export const store = configureStore({
  reducer: {
    counter: counterSile.reducer,
  },
});
