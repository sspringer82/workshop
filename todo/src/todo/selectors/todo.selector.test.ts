import { getTodos } from './todo.selector';

describe('Todo Selector', () => {
  describe('getTodos', () => {
    it('should get todos from state', () => {
      const state = {
        todo: {
          todos: [{ id: 'aaa', title: 'bbb', done: false }],
        },
      };

      const todos = getTodos(state);
      expect(todos).toBe(state.todo.todos);
      expect(todos.length).toBe(1);
      expect(todos).toStrictEqual([{ id: 'aaa', title: 'bbb', done: false }]);
    });
  });
});
