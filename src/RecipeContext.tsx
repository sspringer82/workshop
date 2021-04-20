import React, { Dispatch, SetStateAction, useState } from 'react';
import { Recipe } from './util/recipe';

type ContextValue = [Recipe[], Dispatch<SetStateAction<Recipe[]>>];

export const RecipeContext = React.createContext<ContextValue>([[], (e) => e]);

type Props = {};
const RecipeProvider: React.FC<Props> = (props) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const value: ContextValue = React.useMemo(() => [recipes, setRecipes], [
    recipes,
  ]);

  return <RecipeContext.Provider value={value} {...props} />;
};

export default RecipeProvider;
