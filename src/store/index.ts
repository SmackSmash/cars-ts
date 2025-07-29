import { configureStore } from '@reduxjs/toolkit';

import carsReducer from './slices/carsSlice';

const store = configureStore({
  reducer: {
    carsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
