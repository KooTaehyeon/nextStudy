import { configureStore, createSlice, createStore } from '@reduxjs/toolkit';
export const counterSile = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    up: (state: any, action: { payload: number }) => {
      state.value = state.value + action.payload;
    },
  },
});
