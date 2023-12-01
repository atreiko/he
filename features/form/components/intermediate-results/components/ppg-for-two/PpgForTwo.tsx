'use client';

import { useEffect } from 'react';

import SpaceBetweenColumns from '@/components/ui/space-between-columns/SpaceBetweenColumns';

import { TOBACCO_PPG } from '@/features/form/constants/strings.constants';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectPpg } from '@/store/selectors';
import { setBothPpg, setPpg, setSecondPpg } from '@/store/slices/intermediateResults.slice';

const PpgForTwo: React.FC = () => {
  const pricePerGram = useAppSelector(selectPpg);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (pricePerGram?.ppg && pricePerGram?.ppgSecond && pricePerGram?.ppgBoth) {
      dispatch(setPpg({ ppg: pricePerGram?.ppg }));
      dispatch(setSecondPpg({ ppgSecond: pricePerGram?.ppgSecond }));
      dispatch(setBothPpg({ ppgBoth: pricePerGram?.ppgBoth }));
    }
  }, [pricePerGram, dispatch]);

  const{ ppg, ppgSecond, ppgBoth } = pricePerGram;

  return (
    <SpaceBetweenColumns
      title={TOBACCO_PPG}
      args={[
        'first',
        ppg,
        'second',
        ppgSecond,
        'both',
        ppgBoth,
      ]}
    />
  );
};

export default PpgForTwo;
