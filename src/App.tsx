import React from 'react';

function getAppName() {
  return 'Kochbuch';
}

const App: React.FC = () => {
  return <div>Hallo {getAppName()}</div>;
};

export default App;
