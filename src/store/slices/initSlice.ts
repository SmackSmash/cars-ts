import { createSlice } from '@reduxjs/toolkit';

type InitState = string[];
const initialState: InitState = [];

const initSlice = createSlice({
  name: 'init',
  initialState,
  reducers: {}
});

export default initSlice.reducer;
