import React from 'react';
import BaseForm from './demo/BaseForm';
import Style from './demo/Style/Style';
import List from './List';

function getAppName() {
  return 'Kochbuch';
}

const App: React.FC = () => {
  return (
    <div>
      <h1 className="container border rounded shadow mx-4 text-xl font-bold">
        Hallo {getAppName()}
      </h1>
      <List />
      <Style />
      <BaseForm />
    </div>
  );
};

export default App;
