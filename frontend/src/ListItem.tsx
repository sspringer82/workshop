import { Card, IconButton } from '@material-ui/core';
import { Todo } from './Todo';
import DeleteIcon from '@material-ui/icons/Delete';

type Props = {
  todo: Todo;
  onDelete: (id: number) => void;
};

function ListItem({ todo, onDelete }: Props): React.ReactElement {
  return (
    <Card style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>{todo.title}</div>
      <IconButton
        aria-label="delete"
        onClick={() => {
          onDelete(todo.id);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Card>
  );
}

export default ListItem;
