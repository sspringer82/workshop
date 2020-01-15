import React from 'react';
// import List from './List';
// import Greet from './Greet';
import ListFn from './ListFn';
import Lights from './styling/LightsSC';
import Form from './Form';

const App: React.FC = () => {
  console.log('App render');

  return (
    <>
      {/* <Lights />
      <hr />
      <ListFn />*/}
      <Form />
    </>
  );
};

export default App;
