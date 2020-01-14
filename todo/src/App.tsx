import React from 'react';
import List from './List';
import Greet from './Greet';

const App: React.FC = () => {
  console.log('App render');

  return (
    <>
      <Greet />
      <List />
    </>
  );
};

export default App;
