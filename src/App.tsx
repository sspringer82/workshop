import React from 'react';
import List from './List';
import Event from './demo/Event';
import Form from './demo/Form';

function getAppName() {
  return 'Kochbuch';
}

const App: React.FC = () => {
  return (
    <div>
      Hallo {getAppName()}
      <List />
      <Form />
    </div>
  );
};

export default App;
