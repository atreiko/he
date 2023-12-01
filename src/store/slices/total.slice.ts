import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITotal {
  totalExpensesPercentage: string;
  totalProceedsPercentage: string;
  totalExpenses: string;
  totalProceeds: string;
}

const initialState: ITotal = {
  totalExpensesPercentage: '',
  totalProceedsPercentage: '',
  totalExpenses: '',
  totalProceeds: ''
};

const totalSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    setTotal: (state, action: PayloadAction<ITotal>) => {      
      return { ...state, ...action.payload };
    },
    resetTotal: () => {
      return initialState
    }
  },
});

export const { setTotal, resetTotal } = totalSlice.actions;
export default totalSlice.reducer;
