const initialState = {
  todos: [{ id: 'x', title: 'y', done: false }],
};

export default function(state: any = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}
