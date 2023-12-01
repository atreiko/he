import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import {
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import brandsAmountSlice from './slices/brandsAmount.slice';
import tobaccoSlice from './slices/tobacco.slice';
import coalSlice from './slices/coal.slice';
import bowlSlice from './slices/bowl.slice';
import hookahSlice from './slices/hookah.slice';
import intermediateResultsSlice from './slices/intermediateResults.slice';
import percentageSpendingSlice from './slices/percentageSpending.slice';
import totalSlice from './slices/total.slice';

const rootReducer = combineReducers({
  brands: brandsAmountSlice,
  tobacco: tobaccoSlice,
  coal: coalSlice,
  bowl: bowlSlice,
  hookah: hookahSlice,
  inter: intermediateResultsSlice,
  percentage: percentageSpendingSlice,
  total: totalSlice
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), //.concat(rootReducer.middleware),
});

setupListeners(store.dispatch);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;