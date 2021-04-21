import React from 'react';
import { Recipe } from '../../util/recipe';
import { Link } from 'react-router-dom';

type Props = {
  recipe: Recipe;
  onDelete: (id: number) => void;
};

const RecipeListItem: React.FC<Props> = ({ recipe, onDelete }) => {
  return (
    <li className="flex justify-between odd:bg-gray-200 p-2">
      <div className="pl-4">
        <Link to={`/detail/${recipe.id}`} data-testid="title">
          {recipe.title}
        </Link>
      </div>
      <div className="pr-4">
        <button
          className="border border-gray-500 px-2 rounded"
          onClick={() => onDelete(recipe.id)}
        >
          🗑 löschen
        </button>
      </div>
    </li>
  );
};

export default RecipeListItem;
