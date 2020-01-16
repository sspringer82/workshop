import React from 'react';
import Todo from './todo/components/Todo';
import { Todo as TodoType } from './Todo.interface';
import update from 'immutability-helper';
import { PacmanLoader } from 'react-spinners';

interface State {
  todos: TodoType[];
  isLoading: boolean;
}

interface Props {}

export default class List extends React.Component<Props, State> {
  state = {
    todos: [] as TodoType[],
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
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
        isLoading: false,
      });
    }, 4000);
  }

  handleStatusChange = (todo: TodoType) => {
    this.setState((prevState: State) => {
      const index = prevState.todos.findIndex(t => t.id === todo.id);
      return update(prevState, {
        todos: { [index]: { $toggle: ['done'] } },
      });
    });
  };

  render() {
    if (this.state.isLoading) {
      return <PacmanLoader size={20} color={'#123abc'} loading={true} />;
    } else {
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
}
