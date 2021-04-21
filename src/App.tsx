import React from 'react';
import Form from './Recipe/RecipeForm/RecipeForm';
import Detail from './Recipe/RecipeDetail/Detail';
import RecipeList from './Recipe/RecipeList/RecipeList';
import RecipeProvider from './RecipeContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function getAppName() {
  return 'Kochbuch';
}

const App: React.FC = () => {
  return (
    <RecipeProvider>
      <h1 className="container border rounded shadow mx-4 mt-2 text-xl font-bold p-2">
        Hallo {getAppName()}
      </h1>
      <Router>
        <Switch>
          <Route path="/list">
            <RecipeList />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/" exact>
            <Redirect to="/list" />
          </Route>
        </Switch>
      </Router>
    </RecipeProvider>
  );
};

export default App;
