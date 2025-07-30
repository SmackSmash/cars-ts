import type { FC } from 'react';
import { removeCar, useAppDispatch, useAppSelector } from '../store';
import Button from './Button';

const CarList: FC = () => {
  const list = useAppSelector(({ cars: { list } }) => list);
  const dispatch = useAppDispatch();

  const handleClick = (id: string) => {
    dispatch(removeCar(id));
  };

  return (
    <div className='w-full rounded bg-neutral-800 p-4'>
      {list.length ? (
        list.map(({ name, cost, id }) => (
          <div key={id} className='flex items-center justify-between'>
            {name} £{cost}
            <Button onClick={() => handleClick(id)}>Remove</Button>
          </div>
        ))
      ) : (
        <div>No cars in list</div>
      )}
    </div>
  );
};

export default CarList;
