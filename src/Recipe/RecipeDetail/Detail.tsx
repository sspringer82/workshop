import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeContext } from '../../RecipeContext';

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipes] = useContext(RecipeContext);
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id, 10));

  if (recipe !== undefined) {
    return <div>{recipe.title}</div>;
  } else {
    return <div>Not found what your're looking for</div>;
  }
};

export default Detail;
