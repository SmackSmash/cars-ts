import { configureStore } from '@reduxjs/toolkit';

import form from './slices/formSlice';
import cars from './slices/carsSlice';

const store = configureStore({
  reducer: {
    form,
    cars
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
