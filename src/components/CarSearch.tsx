import type { FC } from 'react';

const CarSearch: FC = () => {
  return (
    <div className='flex w-full items-center justify-between rounded bg-neutral-800 p-4'>
      <h2>My Cars</h2>
      <form className='flex max-w-1/2 items-center'>
        <label htmlFor='search' className='mr-3'>
          Seach
        </label>
        <input
          type='text'
          id='carName'
          className='w-full rounded border-1 border-neutral-600 bg-neutral-900 px-4 py-2 outline-0 focus:border-neutral-200'
        />
      </form>
    </div>
  );
};

export default CarSearch;
