import React from 'react';
import Name from './Name';
import Todo from './Todo';

const App: React.FC = () => {
  return (
    <>
      <Todo />
      <Name name="Basti" />
    </>
  );
};

export default App;
