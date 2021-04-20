import React from 'react';
import Form from './Recipe/RecipeForm/RecipeForm';
import RecipeList from './Recipe/RecipeList/RecipeList';
import RecipeProvider from './RecipeContext';

function getAppName() {
  return 'Kochbuch';
}

const App: React.FC = () => {
  return (
    <RecipeProvider>
      <h1 className="container border rounded shadow mx-4 text-xl font-bold">
        Hallo {getAppName()}
      </h1>
      <RecipeList />
      <hr />
      <Form />
    </RecipeProvider>
  );
};

export default App;
