import { useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useTodo } from './TodoContext';
import ListItem from './ListItem';
import { Link, Route } from 'react-router-dom';
import Form from './Form';

function List(): React.ReactElement {
  const [auth] = useAuth();
  const [todos, setTodos] = useTodo();

  useEffect(() => {
    fetch('http://localhost:3001/todo', {
      headers: {
        'Content-Type': 'Application/json',
        Authorization: `Bearer ${auth}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setTodos(data);
      });
  }, []);

  async function handleDelete(id: number) {
    const response = await fetch(`http://localhost:3001/todo/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/json',
        Authorization: `Bearer ${auth}`,
      },
    });
    if (response.ok) {
      setTodos((prevTodos) => {
        return prevTodos.filter((t) => t.id !== id);
      });
    }
  }

  if (todos.length > 0) {
    return (
      <div>
        {todos.map((todo) => (
          <ListItem todo={todo} onDelete={handleDelete} />
        ))}
        <Route path="/new">
          <Form />
        </Route>
        <Link to="/new">neu</Link>
      </div>
    );
  } else {
    return (
      <div>
        <div>Keine Daten</div>
        <Route path="/new">
          <Form />
        </Route>
        <Link to="/new">neu</Link>
      </div>
    );
  }
}

export default List;
