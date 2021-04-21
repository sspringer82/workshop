import produce from 'immer';

export default function reducer(state: any, action: any) {
  debugger;
  switch (action.type) {
    case 'load_success':
      return produce(state, (draftState: any) => {
        draftState.recipes = action.payload;
      });
    case 'delete':
      return produce(state, (draftState: any) => {
        draftState.recipes = draftState.recipes.filter(
          (recipe: any) => recipe.id !== action.payload,
        );
      });
    default:
      return state;
  }
}
