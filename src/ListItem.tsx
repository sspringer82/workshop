import React from 'react';
import { Recipe } from './recipe';

type Props = {
  recipe: Recipe;
  onDelete: (id: number) => void;
};

const ListItem: React.FC<Props> = ({ recipe, onDelete }) => {
  return (
    <li>
      {recipe.title}
      <button onClick={() => onDelete(recipe.id)}>delete</button>
    </li>
  );
};

export default ListItem;
