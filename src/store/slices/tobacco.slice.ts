import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITobacco {
  tobaccoPrice: string;
  tobaccoWeight: string;
}

export interface ITwoTobaccos extends ITobacco {
  secondTobaccoPrice: string;
  secondTobaccoWeight: string;
}

const initialState: ITobacco | ITwoTobaccos = {
  tobaccoPrice: '',
  tobaccoWeight: '',
};

const tobaccoSlice = createSlice({
  name: 'tobacco',
  initialState,
  reducers: {
    setTobacco: (state, action: PayloadAction<ITobacco | ITwoTobaccos>) => {
      return { ...state, ...action.payload };
    },
    resetTobacco: () => {
      return initialState
    }
  },
});

export const { setTobacco, resetTobacco } = tobaccoSlice.actions;
export default tobaccoSlice.reducer;
