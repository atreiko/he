'use client';

import { useEffect } from 'react';

import SpaceBetween from '@/components/ui/space-between/SpaceBetween';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectPsForTwo } from '@/store/selectors';
import { setPercentageSpending } from '@/store/slices/percentageSpending.slice';

const PsForTwo: React.FC = () => {
  const percentageSpending = useAppSelector(selectPsForTwo);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (percentageSpending) {
      dispatch(setPercentageSpending({ ...percentageSpending }));
    }
  }, [percentageSpending, dispatch]);

  const { tobaccoFirst, tobaccoSecond, tobaccoBoth, coals, salary, additionalExpenses } =
    percentageSpending;

  return (
    <>
      <SpaceBetween left='First tobacco' right={tobaccoFirst ? `${tobaccoFirst} %` : ' '} />
      <SpaceBetween left='Second tobacco' right={tobaccoSecond ? `${tobaccoSecond} %` : ' '} />
      <SpaceBetween left='Both tobaccos' right={tobaccoBoth ? `${tobaccoBoth} %` : ' '} />
      <SpaceBetween left='Coals' right={coals ? `${coals} %` : ' '} />
      <SpaceBetween left='Salary' right={salary ? `${salary} %` : ' '} />
      <SpaceBetween
        left='Additional expenses'
        right={additionalExpenses ? `${additionalExpenses} %` : ' '}
      />
    </>
  );
};

export default PsForTwo;
