import React from 'react';
import { Recipe } from '../../util/recipe';

type Props = {
  recipe: Recipe;
  onDelete: (id: number) => void;
};

const RecipeListItem: React.FC<Props> = ({ recipe, onDelete }) => {
  return (
    <li className="flex justify-around">
      <div>{recipe.title}</div>
      <button className="border rounded" onClick={() => onDelete(recipe.id)}>
        delete
      </button>
    </li>
  );
};

export default RecipeListItem;
