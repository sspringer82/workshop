import React from 'react';
import List from './List';

function getAppName() {
  return 'Kochbuch';
}

const App: React.FC = () => {
  return (
    <div>
      <h1>Hallo {getAppName()}</h1>
      <List />
    </div>
  );
};

export default App;
