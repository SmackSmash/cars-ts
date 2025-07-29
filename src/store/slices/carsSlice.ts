import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
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
  reducers: {
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    addCar: (state, action: PayloadAction<Car>) => {
      state.cars.push(action.payload);
    },
    removeCar: (state, action: PayloadAction<string>) => {
      state.cars = state.cars.filter(car => car.id !== action.payload);
    }
  }
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export default carsSlice.reducer;
