import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  name: string;
  cost: number;
};

const initialState: InitialState = {
  name: '',
  cost: 0
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changeCost: (state, action: PayloadAction<number>) => {
      state.cost = action.payload;
    },
    reset: () => {
      return initialState;
    }
  }
});

export const { changeName, changeCost, reset } = formSlice.actions;
export default formSlice.reducer;
