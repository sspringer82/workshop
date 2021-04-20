import { useEffect, useState } from 'react';
import { Recipe } from '../../util/recipe';
import produce from 'immer';

type ReturnValue = {
  recipes: Recipe[];
  handleDelete: (id: number) => Promise<void>;
  handleSave: (newRecipe: Recipe) => void;
};

export function useRecipe(): ReturnValue {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

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

  function handleSave(newRecipe: Recipe) {
    setRecipes((oldRecipes) =>
      produce(oldRecipes, (draftState) => {
        draftState.push(newRecipe);
      }),
    );
  }

  return { recipes, handleDelete, handleSave };
}
