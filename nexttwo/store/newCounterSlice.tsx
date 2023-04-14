import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export const asyncUpFetch = createAsyncThunk(
  'counterSlice/asyncUpFetch',
  async () => {
    const resp = await fetch(
      'https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits'
    );
    const data = await resp.json();
    return data.value;
  }
);

export const newCounterSlice = createSlice({
  name: 'newCounter',
  initialState: {
    value: 0,
    status: 'Welcome',
  },
  reducers: {
    up: (state: any, action: { payload: number }) => {
      state.value = state.value + action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(
      asyncUpFetch.pending,
      (state: any, action: PayloadAction<string>) => {
        state.value = action.payload;
        state.status = 'Loading';
      }
    ),
      builder.addCase(
        asyncUpFetch.fulfilled,
        (state: any, action: PayloadAction<string>) => {
          state.value = action.payload;
          state.status = 'complete';
        }
      );
    builder.addCase(
      asyncUpFetch.rejected,
      (state: any, action: PayloadAction<string>) => {
        state.status = 'fail';
      }
    );
  },
});
// extraReducers: (builder) => {
//   builder.addCase(asyncUpFetch.pending, (state:any, action:PayloadAction<string>) => {
//     state.value = action.payload;
//     state.status = 'Loading';
//   });
//   builder.addCase(asyncUpFetch.fulfilled,  (state:any, action:PayloadAction<string>) => {
//     state.value = action.payload;
//     state.status = 'complete';
//   });
//   builder.addCase(asyncUpFetch.rejected,  (state:any, action:PayloadAction<string>) => {
//     state.status = 'fail';
//   });
// },
