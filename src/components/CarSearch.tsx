import type { ChangeEvent, FC } from 'react';
import { changeSearchTerm, useAppDispatch, useAppSelector } from '../store';

const CarSearch: FC = () => {
  const searchTerm = useAppSelector(({ cars: { searchTerm } }) => searchTerm);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div className='flex w-full items-center justify-between rounded bg-neutral-800 p-4'>
      <h2 className='font-bold'>My Cars</h2>
      <form className='flex max-w-1/2 items-center'>
        <label htmlFor='search' className='text mr-3'>
          Seach
        </label>
        <input
          type='text'
          id='carName'
          value={searchTerm}
          onChange={e => handleChange(e)}
          className='w-full rounded border-1 border-neutral-600 bg-neutral-900 px-4 py-2 outline-0 focus:border-neutral-200'
        />
      </form>
    </div>
  );
};

export default CarSearch;
