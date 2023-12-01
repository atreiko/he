import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * ppg - price per gram
 * fbw - filled bowl price
 */

export interface IIntermediateResults {
  // tobacco
  ppg: string;
  ppgSecond?: string;
  ppgBoth?: string;
  // coals
  perOnePiece: string;
  perOneHookah: string;
  // bowl
  fbp: string;
  fbpSecond?: string;
  fbpBoth?: string;
}

const initialState: IIntermediateResults = {
  ppg: '',
  perOnePiece: '',
  perOneHookah: '',
  fbp: '',
};

const intermediateResultsSlice = createSlice({
  name: 'intermediateResults',
  initialState,
  reducers: {
    setPpg: (state, action) => {
      return { ...state, ...action.payload };
    },
    setSecondPpg: (state, action) => {
      return { ...state, ...action.payload };
    },
    setBothPpg: (state, action) => {
      return { ...state, ...action.payload };
    },
    setPerOnePiece: (state, action) => {
      return { ...state, ...action.payload };
    },
    setPerOneHookah: (state, action) => {
      return { ...state, ...action.payload };
    },
    setFbp: (state, action) => {
      return { ...state, ...action.payload };
    },
    setFbpSecond: (state, action) => {
      return { ...state, ...action.payload };
    },
    setFbpBoth: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetIntermediateResults: () => {
      return initialState;
    },
  },
});

export const {
  setPpg,
  setSecondPpg,
  setBothPpg,
  setPerOnePiece,
  setPerOneHookah,
  setFbp,
  setFbpSecond,
  setFbpBoth,
  resetIntermediateResults,
} = intermediateResultsSlice.actions;
export default intermediateResultsSlice.reducer;
