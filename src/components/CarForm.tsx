import type { FC } from 'react';
import Button from './Button';

const CarForm: FC = () => {
  return (
    <div className='w-full rounded bg-neutral-800 p-4'>
      <form className='flex w-full items-end gap-4'>
        <div className='flex grow flex-col'>
          <label htmlFor='carName' className='mb-1.5'>
            Car Name
          </label>
          <input
            type='text'
            id='carName'
            className='w-full rounded border-1 border-neutral-600 bg-neutral-900 px-4 py-2 outline-0 focus:border-neutral-200'
          />
        </div>
        <div className='flex grow flex-col'>
          <label htmlFor='carValue' className='mb-1.5'>
            Car Value
          </label>
          <input
            type='number'
            id='carValue'
            className='w-full [appearance:textfield] rounded border-1 border-neutral-600 bg-neutral-900 px-4 py-2 outline-0 focus:border-neutral-200'
          />
        </div>
        <div>
          <Button onClick={() => console.log('Clicked button')}>Add</Button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
