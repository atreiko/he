import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPercentageSpending {
  tobacco: string;
  coals: string;
  salary: string;
  additionalExpenses: string;
}

const initialState: IPercentageSpending = {
  tobacco: '',
  coals: '',
  salary: '',
  additionalExpenses: '',
};

const percentageSpendingSlice = createSlice({
  name: 'percentage',
  initialState,
  reducers: {
    setPercentageSpending: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetPercentageSpending: () => {
      return initialState;
    },
  },
});

export const { setPercentageSpending, resetPercentageSpending } = percentageSpendingSlice.actions;
export default percentageSpendingSlice.reducer;
