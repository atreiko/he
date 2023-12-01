import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export interface ICoal {
  coalPiecesPerKg: string;
  coalPricePerKg: string;
  coalConsumption: string;
}

const initialState: ICoal = {
  coalPiecesPerKg: '',
  coalPricePerKg: '',
  coalConsumption: ''
};

const coalSlice = createSlice({
  name: 'coal',
  initialState,
  reducers: {
    setCoal: (state, action: PayloadAction<ICoal>) => {
      return { ...state, ...action.payload };
    },
    resetCoal: () => {
      return initialState
    }
  },
});

export const { setCoal, resetCoal } = coalSlice.actions;
export default coalSlice.reducer;
