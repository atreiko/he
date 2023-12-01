'use client';

import { useEffect } from 'react';

import SpaceBetween from '@/components/ui/space-between/SpaceBetween';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectPsForOne } from '@/store/selectors';
import { setPercentageSpending } from '@/store/slices/percentageSpending.slice';

const PsForOne = () => {
  const percentageSpending = useAppSelector(selectPsForOne);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (percentageSpending) {
      dispatch(setPercentageSpending({ ...percentageSpending }));
    }
  }, [percentageSpending, dispatch]);

  const { tobacco, coals, salary, additionalExpenses } = percentageSpending;

  return (
    <>
      <SpaceBetween left='Tobacco' right={tobacco ? `${tobacco} %` : ' '} />
      <SpaceBetween left='Coals' right={coals ? `${coals} %` : ' '} />
      <SpaceBetween left='Salary' right={salary ? `${salary} %` : ' '} />
      <SpaceBetween
        left='Additional expenses'
        right={additionalExpenses ? `${additionalExpenses} %` : ' '}
      />
    </>
  );
};

export default PsForOne;
