'use client';

import { useAppSelector } from '@/store/hooks';

const MainResults = () => {
  const { totalExpenses, totalProceeds } = useAppSelector((state) => state.total);

  return (
    <div className='px-2 py-1 flex gap-2 border rounded-xl bg-neutral-950 border-neutral-700 z-50'>
      <span className='text-red-500 font-bold'>{totalExpenses}</span>
      <span className='text-green-500 font-bold'>{totalProceeds}</span>
    </div>
  );
};

export default MainResults;
