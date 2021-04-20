import React, { useState } from 'react';
import Filter from '../../util/Filter';
import Form from '../RecipeForm/RecipeForm';
import RecipeListItem from './RecipeListItem';
import { useRecipe } from './useRecipe';

const RecipeList: React.FC = () => {
  const { recipes, handleDelete, handleSave } = useRecipe();
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
      <hr />
      <Form onSave={handleSave} />
    </>
  );
};

export default RecipeList;
