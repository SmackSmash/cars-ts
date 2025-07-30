import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Car } from '../../types';

type InitialState = {
  searchTerm: string;
  list: Car[];
};

const initialState: InitialState = {
  searchTerm: '',
  list: []
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    addCar: (state, action: PayloadAction<Car>) => {
      state.list.push(action.payload);
    },
    removeCar: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(car => car.id !== action.payload);
    }
  }
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export default carsSlice.reducer;
