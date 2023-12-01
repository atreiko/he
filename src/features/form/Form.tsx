'use client';

import Cell from '@/components/ui/cell/Cell';
import IntermediateResults from './components/intermediate-results/IntermediateResults';
import Tobacco from './components/tobacco/Tobacco';
import Coal from './components/coal/Coal';
import Bowl from './components/bowl/Bowl';
import Hookah from './components/hookah/Hookah';
import PercentageSpending from './components/percentage-spending/PercentageSpending';
import Total from './components/total/Total';

import { BRANDS_TOOLTIP } from './constants/strings.constants';
import { BRANDS_SELECT as selectFields } from './constants/fields.constants';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { BrandsAmountType, setBrandsAmount } from '@/store/slices/brandsAmount.slice';
import { selectBrands } from '@/store/selectors';
import { resetTobacco } from '@/store/slices/tobacco.slice';
import { resetCoal } from '@/store/slices/coal.slice';
import { persistor } from '@/store/redux.provider';
import { resetBowl } from '@/store/slices/bowl.slice';
import { resetHookah } from '@/store/slices/hookah.slice';
import { resetIntermediateResults } from '@/store/slices/intermediateResults.slice';
import { resetPercentageSpending } from '@/store/slices/percentageSpending.slice';
import { resetTotal } from '@/store/slices/total.slice';

import '@/components/ui/field-select/field-select.css';

const Form: React.FC = () => {
  const { amount } = useAppSelector(selectBrands);

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value as BrandsAmountType;

    if (newValue === 'one' || newValue === 'two') {
      dispatch(setBrandsAmount({ amount: newValue }));
      dispatch(resetTobacco());
      dispatch(resetCoal());
      dispatch(resetBowl());
      dispatch(resetHookah());
      dispatch(resetIntermediateResults());
      dispatch(resetPercentageSpending());
      dispatch(resetTotal());
    }

    persistor.purge();
  };

  const brandsOptions = selectFields.map((option) => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 mt-8 mb-8'>
      <IntermediateResults amount={amount} />

      <Cell title='Brands'>
        <label className='selectLabel' data-tooltip={BRANDS_TOOLTIP} htmlFor='brands'>
          amount
        </label>
        <select className='select' id='brands' value={amount} onChange={handleChange}>
          {brandsOptions}
        </select>
      </Cell>

      <Tobacco amount={amount} />
      <Coal amount={amount} />
      <Bowl amount={amount} />
      <Hookah amount={amount} />

      <PercentageSpending amount={amount} />

      <Total />
    </div>
  );
};

export default Form;
