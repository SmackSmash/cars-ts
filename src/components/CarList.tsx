import type { FC } from 'react';
import { useAppSelector } from '../store';

const CarList: FC = () => {
  const { cars } = useAppSelector(({ cars }) => cars);

  return (
    <div className='w-full rounded bg-neutral-800 p-4'>
      {cars.length ? (
        cars.map(car => (
          <div>
            {car.name} £{car.cost}
          </div>
        ))
      ) : (
        <div>No cars in list</div>
      )}
    </div>
  );
};

export default CarList;
