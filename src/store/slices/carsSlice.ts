import { createSlice } from '@reduxjs/toolkit';

type InitState = {
  name: string;
  cost: number | null;
  searchTerm: string;
  cars: {
    id: string;
    name: string;
    value: number;
  }[];
};
const initialState: InitState = {
  name: '',
  cost: null,
  searchTerm: '',
  cars: []
};

const carsSlice = createSlice({
  name: 'init',
  initialState,
  reducers: {}
});

export default carsSlice.reducer;
