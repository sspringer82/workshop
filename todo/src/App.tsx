import React from 'react';
import List from './List';

const App: React.FC = () => {
  console.log('App render');

  return (
    <>
      <List />
      <hr />
    </>
  );
};

export default App;
