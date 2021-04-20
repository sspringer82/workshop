import React from 'react';
import { Recipe } from '../../util/recipe';
import { Link } from 'react-router-dom';

type Props = {
  recipe: Recipe;
  onDelete: (id: number) => void;
};

const RecipeListItem: React.FC<Props> = ({ recipe, onDelete }) => {
  return (
    <li className="flex justify-around">
      <div>
        <Link to={`/detail/${recipe.id}`}>{recipe.title}</Link>
      </div>
      <button className="border rounded" onClick={() => onDelete(recipe.id)}>
        delete
      </button>
    </li>
  );
};

export default RecipeListItem;
