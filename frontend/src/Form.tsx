import { Button, Dialog, DialogContent, TextField } from '@material-ui/core';
import { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Todo } from './Todo';

function Form(): React.ReactElement {
  const [todo, setTodo] = useState<Todo>({ id: 0, title: '', done: false });
  const history = useHistory();
  function handleSubmit(e: any) {
    e.preventDefault();
  }
  return (
    <Dialog
      open={true}
      onClose={() => {
        history.push('/');
      }}
    >
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            name="title"
            label="title"
            value={todo.title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const value = e.currentTarget.value;
              setTodo((prevTodo) => ({ ...prevTodo, title: value }));
            }}
          />
          <Button type="submit">speichern</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default Form;
