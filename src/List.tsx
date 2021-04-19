import React, { useEffect, useState } from 'react';
import { Recipe } from './recipe';

const List: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3001/recipe');
      const data = await response.json();
      setRecipes(data);
    })();
  }, []);

  async function handleClick(id: number): Promise<void> {
    const response = await fetch('http://localhost:3001/recipe/' + id, {
      method: 'DELETE',
    });
    if (response.ok) {
      setRecipes((oldRecipe) => {
        const newRecipe = oldRecipe.filter((recipe) => recipe.id !== id);
        return newRecipe;
      });
    }
  }

  if (recipes.length === 0) {
    return <div>No Recipes found</div>;
  }

  return (
    <ul>
      {recipes.map((recipe) => {
        return (
          <li key={recipe.id}>
            {recipe.title}
            <button onClick={() => handleClick(recipe.id)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
