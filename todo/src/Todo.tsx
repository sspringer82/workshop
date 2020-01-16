import React, { useContext } from 'react';
import { Todo as TodoType } from './Todo.interface';
import Typography from '@material-ui/core/Typography';
import { CardContent, Card, Container } from './Todo.styles';
import { Link } from 'react-router-dom';
import DarkMode from './DarkMode';

interface Props {
  todo: TodoType;
  onStatusChange: (todo: TodoType) => void;
}

const Todo: React.FC<Props> = ({ todo, onStatusChange }) => {
  const { id, title, done } = todo;

  const darkMode = useContext(DarkMode);

  return (
    <Card>
      <Container darkMode={darkMode}>
        <CardContent>
          <Typography variant="h5" component="h2">
            <Link to={'/form/' + id}>
              {title}({id})
            </Link>
          </Typography>
          <div
            onClick={() => {
              onStatusChange(todo);
            }}
          >
            {done ? '✅' : '❌'}{' '}
          </div>
        </CardContent>
      </Container>
    </Card>
  );
};

export default Todo;
