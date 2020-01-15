import React, { useState, ChangeEvent } from 'react';
import { Todo as TodoType } from './Todo.interface';

interface Props {
  onSubmit: (todo: TodoType) => void;
}
const TodoForm: React.FC<Props> = ({ onSubmit }) => {
  const initialValue = { id: '', title: '', done: false };
  const [value, setValue] = useState(initialValue);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const key = e.currentTarget.name;
    const value =
      e.currentTarget.type === 'checkbox'
        ? e.currentTarget.checked
        : e.currentTarget.value;
    setValue(prevValue => {
      const newValue = {
        ...prevValue,
        [key]: value,
      };
      return newValue;
    });
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(value);
        setValue(initialValue);
      }}
    >
      <div>
        <input
          placeholder="id"
          name="id"
          type="text"
          value={value.id}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          placeholder="title"
          name="title"
          type="text"
          value={value.title}
          onChange={handleChange}
        />
      </div>
      <div>
        done?
        <input
          name="done"
          type="checkbox"
          checked={value.done}
          onChange={handleChange}
        />
      </div>
      <button type="submit">speichern</button>
    </form>
  );
};

export default TodoForm;
