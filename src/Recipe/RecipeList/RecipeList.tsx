import React, { useState } from 'react';
import Filter from '../../util/Filter';
import RecipeListItem from './RecipeListItem';
import { useRecipe } from './useRecipe';
import { Link } from 'react-router-dom';

const RecipeList: React.FC = () => {
  const { recipes, handleDelete } = useRecipe();
  const [filter, setFilter] = useState<string>('');

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
      <Link to="/form">neu</Link>
    </>
  );
};

export default RecipeList;
