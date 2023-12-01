'use client';

import { useEffect } from 'react';

import SpaceBetweenColumns from '@/components/ui/space-between-columns/SpaceBetweenColumns';

import { FILLED_BOWL_PRICE } from '@/features/form/constants/strings.constants';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectFilledBowlPriceForTwo } from '@/store/selectors';
import { setFbp, setFbpBoth, setFbpSecond } from '@/store/slices/intermediateResults.slice';

const FbpForTwo: React.FC = () => {
  const { percentageFirst, percentageSecond } = useAppSelector(state => state.bowl)
  const filledBowlPrice = useAppSelector(selectFilledBowlPriceForTwo);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFbp({ fbp: filledBowlPrice?.fbp }));
    dispatch(setFbpSecond({ fbpSecond: filledBowlPrice?.fbpSecond }));
    dispatch(setFbpBoth({ fbpBoth: filledBowlPrice?.fbpBoth }));
  }, [filledBowlPrice, dispatch]);

  return (
    <SpaceBetweenColumns
      title={FILLED_BOWL_PRICE}
      args={[
        `${percentageFirst}% first`,
        filledBowlPrice?.fbp,
        `${percentageSecond}% second`,
        filledBowlPrice?.fbpSecond,
        '100%',
        filledBowlPrice?.fbpBoth,
      ]}
    />
  );
};

export default FbpForTwo;
