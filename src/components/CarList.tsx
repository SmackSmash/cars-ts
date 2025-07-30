import type { FC } from 'react';
import { useAppSelector } from '../store';

const CarList: FC = () => {
  const list = useAppSelector(({ cars: { list } }) => list);

  return (
    <div className='w-full rounded bg-neutral-800 p-4'>
      {list.length ? (
        list.map(car => (
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
