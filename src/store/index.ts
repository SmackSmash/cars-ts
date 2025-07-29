import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import form from './slices/formSlice';
export { changeName, changeCost } from './slices/formSlice';

import cars from './slices/carsSlice';

const store = configureStore({
  reducer: {
    form,
    cars
  }
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export default store;
