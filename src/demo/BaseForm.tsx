import React, { ChangeEvent, createRef, FormEvent, useState } from 'react';

type State = {
  firstname: string;
  lastname: string;
};

const BaseForm: React.FC = () => {
  const inputRef = createRef<HTMLInputElement>();

  const [state, setState] = useState<State>({
    firstname: '',
    lastname: '',
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const name = e.target.name;
    const value = e.target.value;

    const minLength = e.target.getAttribute('minLength');
    if (minLength !== null && e.target.value.length < parseInt(minLength, 10)) {
      alert('Input is too short');
    }

    setState((oldState) => {
      return {
        ...oldState,
        [name]: value,
      };
    });
  }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();

    console.log('state', state);
    console.log('uncontrolled comp', inputRef.current?.value);

    console.log('i want to save ', state);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>
          Firstname:
          <input
            type="text"
            name="firstname"
            id="firstname"
            minLength={3}
            value={state.firstname}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <fieldset>
        <label>
          Lastname:
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={state.lastname}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      age: <input type="text" name="age" id="age" ref={inputRef} />
      <button type="submit">speichern</button>
    </form>
  );
};

export default BaseForm;
