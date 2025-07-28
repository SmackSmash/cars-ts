import { configureStore } from '@reduxjs/toolkit';

import initReducer from './slices/initSlice';

const store = configureStore({
  reducer: {
    initReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
