import React, { ChangeEvent, useEffect, useState } from 'react';
import { Recipe } from './recipe';

const List: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filter, setFilter] = useState<string>('');

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

  function handleFilterChange(e: ChangeEvent<HTMLInputElement>): void {
    setFilter(e.target.value);
  }

  if (recipes.length === 0) {
    return <div>No Recipes found</div>;
  }

  return (
    <>
      <label>
        Find recipes:
        <input
          type="text"
          name="filter"
          id="filter"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
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
              <li key={recipe.id}>
                {recipe.title}
                <button onClick={() => handleClick(recipe.id)}>delete</button>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default List;
