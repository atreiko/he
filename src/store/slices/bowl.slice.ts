import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PercentageType = '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90';

export interface IBowl {
  capacity: string;
}

export interface IBowlForTwo extends IBowl {
  percentageFirst: string;
  percentageSecond: string;
}

const initialState: IBowl | IBowlForTwo = {
  capacity: '',
  percentageFirst: '50',
  percentageSecond: '50',
};

const bowlSlice = createSlice({
  name: 'bowl',
  initialState,
  reducers: {
    setBowl: (state, action: PayloadAction<IBowl | IBowlForTwo>) => {
      return { ...state, ...action.payload };
    },
    resetBowl: () => {
      return initialState;
    },
  },
});

export const { setBowl, resetBowl } = bowlSlice.actions;
export default bowlSlice.reducer;
