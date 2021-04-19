import React from 'react';

function getAppName() {
  return 'Kochbuch';
}

function App1() {
  return <div>Hallo {getAppName()}</div>;
}

class App2 extends React.Component {
  getAppName() {
    return 'Kochbuch';
  }
  render() {
    return <div>Hallo {this.getAppName()}</div>;
  }
}

const App: React.FC = () => {
  return <div>Hallo {getAppName()}</div>;
};

export default App;
