import React from 'react';
import Todo from './Todo';

interface State {}

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

  render() {
    return (
      <div>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} todo={todo} onStatusChange={() => {}} />
        ))}
      </div>
    );
  }
}
