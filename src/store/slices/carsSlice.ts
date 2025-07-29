import { createSlice } from '@reduxjs/toolkit';

type Car = {
  id: string;
  name: string;
  value: number;
};

type InitState = {
  name: string;
  cost: number | null;
  searchTerm: string;
  cars: Car[];
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
