import React from 'react';
import Component from './demo/component';

function getAppName() {
  return 'Kochbuch';
}

const App: React.FC = () => {
  return (
    <div>
      Hallo {getAppName()}
      <Component />
    </div>
  );
};

export default App;
