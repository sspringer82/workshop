import React from 'react';
import List from './List';

function getAppName() {
  return 'Kochbuch';
}

const App: React.FC = () => {
  return (
    <div>
      Hallo {getAppName()}
      <List />
    </div>
  );
};

export default App;
