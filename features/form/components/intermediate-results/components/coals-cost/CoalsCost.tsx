'use client';

import { useEffect } from 'react';

import SpaceBetweenColumns from '@/components/ui/space-between-columns/SpaceBetweenColumns';

import { useCoalsCost } from '@/features/form/hooks/useCoalsCost';
import { COALS_COST } from '@/features/form/constants/strings.constants';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectCoalsCost } from '@/store/selectors';
import { setPerOneHookah, setPerOnePiece } from '@/store/slices/intermediateResults.slice';

const CoalsCost: React.FC = () => {
  const coalsCost = useAppSelector(selectCoalsCost);

  const dispatch = useAppDispatch();

  const { perOnePiece, perOneHookah } = coalsCost;

  useEffect(() => {
    dispatch(setPerOnePiece({ perOnePiece }));
    dispatch(setPerOneHookah({ perOneHookah }));
  }, [perOnePiece, perOneHookah, dispatch]);

  return (
    <SpaceBetweenColumns
      title={COALS_COST}
      args={['per one piece', perOnePiece, 'per one hookah', perOneHookah]}
    />
  );
};

export default CoalsCost;
