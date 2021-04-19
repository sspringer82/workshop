import React, { ChangeEvent, FormEvent, useState } from 'react';

const Form: React.FC = () => {
  const [state, setState] = useState<{ firstname: string }>({
    firstname: 'Klaus',
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const name = e.target.name;
    const value = e.target.value;

    setState((oldState) => {
      return {
        ...oldState,
        [name]: value,
      };
    });
  }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();

    console.log('i want to save ', state);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Firstname:
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={state.firstname}
          onChange={handleChange}
        />
      </label>
      <button>save</button>
    </form>
  );
};

export default Form;
