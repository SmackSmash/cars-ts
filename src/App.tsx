import type { FC } from 'react';
import CarSearch from './components/CarSearch';
import CarForm from './components/CarForm';
import CarList from './components/CarList';
import CarValue from './components/CarValue';

const App: FC = () => {
  return (
    <div className='p-4'>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
};

export default App;
