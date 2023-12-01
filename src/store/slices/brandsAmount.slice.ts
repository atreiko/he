import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export type BrandsAmountType = 'one' | 'two';

export interface IBrandsAmount {
  amount: BrandsAmountType;
}

const initialState: IBrandsAmount = {
  amount: 'one'
}

const brandsAmountSlice = createSlice({
  name: 'brandsAmount',
  initialState,
  reducers: {
    setBrandsAmount: (state, action: PayloadAction<IBrandsAmount>) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { setBrandsAmount } = brandsAmountSlice.actions;
export default brandsAmountSlice.reducer;