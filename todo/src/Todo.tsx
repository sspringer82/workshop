import React from 'react';
import { Todo as TodoType } from './Todo.interface';
import Typography from '@material-ui/core/Typography';
import { CardContent, Card } from './Todo.styles';

interface Props {
  todo: TodoType;
  onStatusChange: (todo: TodoType) => void;
}

const Todo: React.FC<Props> = ({ todo, onStatusChange }) => {
  const { id, title, done } = todo;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}({id})
        </Typography>
        <div
          onClick={() => {
            onStatusChange(todo);
          }}
        >
          {done ? '✅' : '❌'}{' '}
        </div>
      </CardContent>
    </Card>
  );
};

export default Todo;
