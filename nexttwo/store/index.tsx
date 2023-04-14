import { configureStore, createSlice, createStore } from '@reduxjs/toolkit';
import { counterSile } from './counterSlice';
import { newCounterSlice } from './newCounterSlice';
export const counterStore = configureStore({
  reducer: {
    counter: counterSile.reducer,
  },
});
export const newCounterSrore = configureStore({
  reducer: {
    counter: newCounterSlice.reducer,
  },
});
