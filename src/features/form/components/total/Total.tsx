'use client';

import { useEffect } from 'react';

import Cell from '@/components/ui/cell/Cell';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectTotal } from '@/store/selectors';
import { setTotal } from '@/store/slices/total.slice';

const Total: React.FC = () => {
  const total = useAppSelector(selectTotal);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTotal(total))
  }, [total, dispatch])

  const { totalExpensesPercentage, totalProceedsPercentage, totalExpenses, totalProceeds } = total;
  
  return (
    <>
      <Cell ghost>
        <div className='flex flex-col justify-between gap-2 h-full'>
          <h6 className='text-5xl'>TOTAL EXPENSES</h6>
          <div className='flex justify-between items-center'>
            <p className='text-4xl text-red-500'>{totalExpensesPercentage || 0} %</p>
            <p className='text-4xl text-red-500'>{totalExpenses || 0}</p>
          </div>
        </div>
      </Cell>

      <Cell ghost>
        <div className='flex flex-col justify-between gap-2 h-full'>
          <h6 className='text-5xl'>TOTAL PROCEEDS</h6>
          <div className='flex justify-between items-center'>
            <p className='text-4xl text-green-500'>{totalProceedsPercentage || 0} %</p>
            <p className='text-4xl text-green-500'>{totalProceeds || 0}</p>
          </div>
        </div>
      </Cell>
    </>
  );
};

export default Total;
