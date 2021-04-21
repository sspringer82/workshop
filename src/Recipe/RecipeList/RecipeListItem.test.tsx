import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import RecipeListItem from './RecipeListItem';
import { BrowserRouter } from 'react-router-dom';

describe('RecipeListItem', () => {
  const recipe = {
    id: 1,
    title: 'Schnitzel',
    ingredients: ['1000g Fleisch'],
    steps: ['braten'],
  };

  it('should render the name of a recipe', () => {
    const { getByText } = render(
      <BrowserRouter>
        <RecipeListItem recipe={recipe} onDelete={jest.fn()} />,
      </BrowserRouter>,
    );

    expect(getByText('Schnitzel')).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveTextContent('Schnitzel');
  });

  it('should delete an entry', () => {
    const onDeleteSpy = jest.fn();

    const { getByTestId } = render(
      <BrowserRouter>
        <RecipeListItem recipe={recipe} onDelete={onDeleteSpy} />,
      </BrowserRouter>,
    );

    fireEvent.click(getByTestId('delete-button'));

    expect(onDeleteSpy).toHaveBeenCalledWith(1);
  });

  it('should verify a snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <RecipeListItem recipe={recipe} onDelete={jest.fn()} />,
      </BrowserRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
