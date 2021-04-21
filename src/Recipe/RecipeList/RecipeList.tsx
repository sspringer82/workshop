import React, { useEffect, useState } from 'react';
import Filter from '../../util/Filter';
import RecipeListItem from './RecipeListItem';
import { useRecipe } from './useRecipe';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const RecipeList: React.FC = () => {
  const { recipes, handleDelete } = useRecipe();
  const [filter, setFilter] = useState<string>('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'load' });
  }, [dispatch]);

  const selectedRecipes = useSelector((data: any) => {
    return data.recipes;
  });

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
      <Link
        to="/form"
        className="border border-gray-500 px-2 rounded ml-4 mt-2"
      >
        neu
      </Link>

      <hr />
      <div>
        {selectedRecipes.map((sr: any) => (
          <div>{sr.title}</div>
        ))}
      </div>
    </>
  );
};

export default RecipeList;
