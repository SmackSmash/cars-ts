import { createSlice } from '@reduxjs/toolkit';
import type { Car } from '../../types';

type InitialState = {
  searchTerm: string;
  cars: Car[];
};

const initialState: InitialState = {
  searchTerm: '',
  cars: []
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {}
});

export default carsSlice.reducer;
