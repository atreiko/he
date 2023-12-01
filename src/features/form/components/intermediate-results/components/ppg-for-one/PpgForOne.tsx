'use client';

import { useEffect } from 'react';

import SpaceBetween from '@/components/ui/space-between/SpaceBetween';

import { TOBACCO_PPG } from '@/features/form/constants/strings.constants';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setPpg } from '@/store/slices/intermediateResults.slice';
import { selectPpg } from '@/store/selectors';

const PpgForOne: React.FC = () => {
  const pricePerGram = useAppSelector(selectPpg);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (pricePerGram?.ppg) {
      dispatch(setPpg({ ...pricePerGram }));
    }
  }, [pricePerGram, dispatch]);

  const { ppg } = pricePerGram;

  return <SpaceBetween left={TOBACCO_PPG} right={ppg} />;
};

export default PpgForOne;
