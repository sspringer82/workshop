import React from 'react';

const recipes = [
  {
    id: 1,
    title: 'Schnitzel',
    ingredients: ['1000g Fleisch'],
    steps: ['braten'],
  },
  {
    id: 2,
    title: 'Tomatensuppe',
    ingredients: ['1000g Tomaten', '1l Wasser'],
    steps: ['kochen', 'umrühren'],
  },
];

// const recipes: any[] = [];

// const List: React.FC = () => {
//   return (
//     <ul>
//       {recipes.length > 0 ? (
//         recipes.map((recipe) => {
//           return <li key={recipe.id}>{recipe.title}</li>;
//         })
//       ) : (
//         <li>No Recipes found</li>
//       )}
//     </ul>
//   );
// };

const List: React.FC = () => {
  if (recipes.length === 0) {
    return <div>No Recipes found</div>;
  }

  return (
    <ul>
      {recipes.map((recipe) => {
        return <li key={recipe.id}>{recipe.title}</li>;
      })}
    </ul>
  );
};

export default List;
