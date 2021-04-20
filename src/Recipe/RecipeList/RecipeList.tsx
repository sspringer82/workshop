import React, { useEffect, useState } from 'react';
import Filter from '../../util/Filter';
import Form from '../RecipeForm/RecipeForm';
import RecipeListItem from './RecipeListItem';
import { Recipe } from '../../util/recipe';

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3001/recipe');
      const data = await response.json();
      setRecipes(data);
    })();
  }, []);

  async function handleDelete(id: number): Promise<void> {
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
    <>
      <Filter filter={filter} setFilter={setFilter} />
      <ul>
        {recipes
          .filter((recipe) => {
            return (
              filter.length === 0 ||
              recipe.title.toLowerCase().includes(filter.toLowerCase())
            );
          })
          .map((recipe) => {
            return (
              <RecipeListItem
                key={recipe.id}
                recipe={recipe}
                onDelete={handleDelete}
              />
            );
          })}
      </ul>
      <hr />
      <Form />
    </>
  );
};

export default RecipeList;
