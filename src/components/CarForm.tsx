import type { ChangeEvent, FC, FormEvent } from 'react';
import Button from './Button';
import { useAppSelector } from '../store';

const CarForm: FC = () => {
  const { name, cost } = useAppSelector(({ form }) => form);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {};

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {};

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, cost);
  };

  return (
    <div className='w-full rounded bg-neutral-800 p-4'>
      <form onSubmit={e => handleSubmit(e)} className='flex w-full items-end gap-4'>
        <div className='flex grow flex-col'>
          <label htmlFor='carName' className='mb-1.5'>
            Car Name
          </label>
          <input
            type='text'
            id='carName'
            value={name}
            onChange={e => handleNameChange(e)}
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
            value={cost || ''}
            onChange={e => handleValueChange(e)}
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
