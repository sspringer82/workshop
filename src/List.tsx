import React, { useEffect, useState } from 'react';
import { Recipe } from './recipe';

const initialRecipes = [
  {
    id: 1,
    title: 'Schnitzel',
    ingredients: ['1000g Fleisch'],
    steps: ['braten'],
  },
  {
    id: 2,
    title: 'Tomatensuppe',
    ingredients: ['1000g Tomaten', '1l Wasser'],
    steps: ['kochen', 'umrühren'],
  },
];

const List: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3001/recipe');
      const data = await response.json();
      setRecipes(data);
    })();
  }, []);

  if (recipes.length === 0) {
    return <div>No Recipes found</div>;
  }

  return (
    <ul>
      {recipes.map((recipe) => {
        return <li key={recipe.id}>{recipe.title}</li>;
      })}
    </ul>
  );
};

export default List;
