import type { FC } from 'react';
import { useAppSelector } from '../store';

const CarValue: FC = () => {
  const list = useAppSelector(({ cars: { list } }) => list);
  const searchTerm = useAppSelector(({ cars: { searchTerm } }) => searchTerm);

  return (
    <div className='flex w-full items-center justify-end rounded bg-neutral-800 p-4'>
      Total:
      <div className='ml-2 rounded-full bg-emerald-700 px-2.5 py-0.5'>
        £
        {list
          .filter(car => car.name !== searchTerm)
          .reduce((acc, car) => {
            return acc + car.cost;
          }, 0)
          .toLocaleString('en-US')}
      </div>
    </div>
  );
};

export default CarValue;
