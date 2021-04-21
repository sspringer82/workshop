import React from 'react';
import Form from './Recipe/RecipeForm/RecipeForm';
import Detail from './Recipe/RecipeDetail/Detail';
import RecipeList from './Recipe/RecipeList/RecipeList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RecipeProvider from './RecipeContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import produce from 'immer';

function getAppName() {
  return 'Kochbuch';
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'load':
      return produce(state, (draftState: any) => {
        state.recipes = [
          {
            id: 1,
            title: 'Schnitzel',
            ingredients: ['1000g Fleisch'],
            steps: ['braten'],
          },
          {
            title: 'Milchreis',
            ingredients: ['milch', 'reis'],
            steps: ['a', 'b'],
            id: 2,
          },
        ];
      });
    case 'delete':
      return produce(state, (draftState: any) => {
        draftState.recipes = draftState.recipes.filter(
          (recipe: any) => recipe.id !== action.payload,
        );
      });
    default:
      return state;
  }
}

function configureStore() {
  return createStore(reducer, {
    recipes: [],
  });
}
const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
