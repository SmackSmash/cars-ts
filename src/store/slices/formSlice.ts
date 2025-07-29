import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  name: string;
  cost: number | null;
};

const initialState: InitialState = {
  name: '',
  cost: null
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {}
});

export default formSlice.reducer;
