import React from 'react';
import { Todo as TodoType } from './Todo.interface';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
          Done: {done ? '✅' : '❌'}{' '}
        </div>
      </CardContent>
    </Card>
  );
};

export default Todo;
