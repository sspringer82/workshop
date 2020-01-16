import React from 'react';
import List from './List';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import TodoForm from './TodoForm';

const App: React.FC = () => {
  console.log('App render');

  return (
    <Router>
      <ul>
        <li>
          <Link to="/list">Liste</Link>
        </li>
        <li>
          <Link to="/form">Formular</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/form/:id">
          <TodoForm onSubmit={() => {}} />
        </Route>
        <Route path="/form">
          <TodoForm onSubmit={() => {}} />
        </Route>
        <Route path="/" exact>
          <Redirect to="/list"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
