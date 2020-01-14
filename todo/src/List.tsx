import React from 'react';
import Todo from './Todo';
import { Todo as TodoType } from './Todo.interface';
import update from 'immutability-helper';

interface State {
  todos: TodoType[];
}

interface Props {}

export default class List extends React.Component<Props, State> {
  state = {
    todos: [
      {
        id: '1',
        title: 'Get up',
        done: true,
      },
      {
        id: '2',
        title: 'Have Breakfast',
        done: false,
      },
    ],
  };

  handleStatusChange = (todo: TodoType) => {
    this.setState((prevState: State) => {
      const index = prevState.todos.findIndex(t => t.id === todo.id);
      return update(prevState, {
        todos: { [index]: { $toggle: ['done'] } },
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            onStatusChange={this.handleStatusChange}
          />
        ))}
      </div>
    );
  }
}
