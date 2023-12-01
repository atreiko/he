import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export interface IHookah {
  hookahPrice: string;
  salaryPerOneHookah: string;
  additionalExpenses: string;
}

const initialState: IHookah = {
  hookahPrice: '',
  salaryPerOneHookah: '0',
  additionalExpenses: '0',
};

const hookahSlice = createSlice({
  name: 'hookah',
  initialState,
  reducers: {
    setHookah: (state, action: PayloadAction<IHookah>) => {
      return { ...state, ...action.payload };
    },
    resetHookah: () => {
      return initialState;
    },
  },
});

export const { setHookah, resetHookah } = hookahSlice.actions;
export default hookahSlice.reducer;
