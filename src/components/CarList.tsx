import type { FC } from 'react';
import { removeCar, useAppDispatch, useAppSelector } from '../store';
import Button from './Button';

const CarList: FC = () => {
  const searchTerm = useAppSelector(({ cars: { searchTerm } }) => searchTerm);
  const list = useAppSelector(({ cars: { list } }) => list);
  const dispatch = useAppDispatch();

  const handleClick = (id: string) => {
    dispatch(removeCar(id));
  };

  return (
    <div className='flex w-full flex-col gap-2 rounded bg-neutral-800 p-4'>
      {list.length ? (
        list
          .filter(({ name }) => name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(({ name, cost, id }) => (
            <div key={id} className='flex items-center gap-2 rounded bg-neutral-900 py-2 pr-2 pl-4'>
              {name}
              <div className='rounded-full bg-neutral-700 px-2.5 py-0.5'>£{cost}</div>
              <Button onClick={() => handleClick(id)} className='ml-auto'>
                Remove
              </Button>
            </div>
          ))
      ) : (
        <div>No cars in list</div>
      )}
    </div>
  );
};

export default CarList;
