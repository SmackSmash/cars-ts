import { useRef, type ChangeEvent, type FC, type FormEvent } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { addCar, changeCost, changeName, useAppDispatch, useAppSelector } from '../store';
import Button from './Button';

const CarForm: FC = () => {
  // No destructuring to avoid rendering errors
  const name = useAppSelector(({ form: { name } }) => name);
  const cost = useAppSelector(({ form: { cost } }) => cost);
  const dispatch = useAppDispatch();

  const nameInput = useRef<HTMLInputElement>(null);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(e.target.value));
  };

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCost(Number(e.target.value)));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addCar({
        name,
        cost,
        id: nanoid()
      })
    );
    nameInput.current!.focus();
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
            required
            ref={nameInput}
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
            min='1'
            value={cost || ''}
            onChange={e => handleValueChange(e)}
            className='w-full [appearance:textfield] rounded border-1 border-neutral-600 bg-neutral-900 px-4 py-2 outline-0 focus:border-neutral-200'
          />
        </div>
        <div>
          <Button type='submit'>Add</Button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
