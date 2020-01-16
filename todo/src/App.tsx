import React, { useState } from 'react';
import List from './List';
import DarkMode from './DarkMode';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import TodoForm from './TodoForm';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
const store = configureStore();

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Provider store={store}>
      <DarkMode.Provider value={{ darkMode, setDarkMode }}>
        <Router>
          <ul>
            <li>
              <Link to="/list">Liste</Link>
            </li>
            <li>
              <Link to="/form">Formular</Link>
            </li>
          </ul>
          <button onClick={() => setDarkMode(dm => !dm)}>darkMode</button>
          <Switch>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/form/:id">
              <TodoForm />
            </Route>
            <Route path="/form">
              <TodoForm />
            </Route>
            <Route path="/" exact>
              <Redirect to="/list"></Redirect>
            </Route>
          </Switch>
        </Router>
      </DarkMode.Provider>
    </Provider>
  );
};

export default App;
