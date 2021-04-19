import React from 'react';
import List from './List';
import Event from './demo/Event';

function getAppName() {
  return 'Kochbuch';
}

const App: React.FC = () => {
  return (
    <div>
      Hallo {getAppName()}
      <List />
      <Event />
    </div>
  );
};

export default App;
