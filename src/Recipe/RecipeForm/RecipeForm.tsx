import React, { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../../util/Button';
import { Recipe } from '../../util/recipe';

const Form: React.FC = () => {
  const [state, setState] = useState<Omit<Recipe, 'id'>>({
    title: '',
    ingredients: ['', ''],
    steps: [],
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const name = e.target.name;
    const value = e.target.value;

    setState((oldState) => {
      const newState = {
        ...oldState,
      };

      if (name === 'zutat0') {
        newState.ingredients[0] = value;
      } else if (name === 'zutat1') {
        newState.ingredients[1] = value;
      } else {
        newState['title'] = value;
      }

      return newState;
    });
  }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();

    console.log('state', state);

    console.log('i want to save ', state);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>
          Title:
          <input
            type="text"
            name="title"
            id="title"
            value={state.title}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <h2>Zutaten</h2>
      <fieldset>
        <label>
          Zutat 1:
          <input
            type="text"
            name="zutat0"
            id="zutat0"
            value={state.ingredients[0]}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <fieldset>
        <label>
          Zutat 2:
          <input
            type="text"
            name="zutat1"
            id="zutat1"
            value={state.ingredients[1]}
            onChange={handleChange}
          />
        </label>
      </fieldset>

      <Button label="save" />
    </form>
  );
};

export default Form;
