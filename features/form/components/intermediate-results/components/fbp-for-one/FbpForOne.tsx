'use client';

import { useEffect } from 'react';

import SpaceBetween from '@/components/ui/space-between/SpaceBetween';

import { FILLED_BOWL_PRICE } from '@/features/form/constants/strings.constants';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectFilledBowlPriceForOne } from '@/store/selectors';
import { setFbp } from '@/store/slices/intermediateResults.slice';

const FbpForOne: React.FC = () => {
  const filledBowlPrice = useAppSelector(selectFilledBowlPriceForOne);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFbp({ ...filledBowlPrice }));
  }, [filledBowlPrice, dispatch]);

  return <SpaceBetween left={FILLED_BOWL_PRICE} right={filledBowlPrice?.fbp} />;
};

export default FbpForOne;
