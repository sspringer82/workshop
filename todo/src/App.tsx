import React from 'react';
import List from './List';
import Uncontrolled from './Uncontrolled';

const App: React.FC = () => {
  console.log('App render');

  return (
    <>
      <Uncontrolled />
      <hr />
      <List />
    </>
  );
};

export default App;
