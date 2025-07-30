import type { FC } from 'react';
import { useAppSelector } from '../store';

const CarValue: FC = () => {
  const list = useAppSelector(({ cars: { list } }) => list);
  const searchTerm = useAppSelector(({ cars: { searchTerm } }) => searchTerm);

  return (
    <div className='flex w-full justify-end rounded bg-neutral-800 p-4'>
      Total: £
      {list
        .filter(car => car.name !== searchTerm)
        .reduce((acc, car) => {
          return acc + car.cost;
        }, 0)}
    </div>
  );
};

export default CarValue;
