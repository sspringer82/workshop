import React from 'react';
import Context from './demo/Context';
import FormikForm from './demo/FormikForm';
import RecipeList from './Recipe/RecipeList/RecipeList';

function getAppName() {
  return 'Kochbuch';
}

const App: React.FC = () => {
  return (
    <div>
      <h1 className="container border rounded shadow mx-4 text-xl font-bold">
        Hallo {getAppName()}
      </h1>
      <RecipeList />
      <FormikForm />
      <Context />
    </div>
  );
};

export default App;
