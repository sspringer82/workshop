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
  let getByText: any;
  let getByTestId: any;
  let onDeleteSpy: any;
  let container: any;

  beforeEach(() => {
    onDeleteSpy = jest.fn();
    const obj = render(
      <BrowserRouter>
        <RecipeListItem recipe={recipe} onDelete={onDeleteSpy} />,
      </BrowserRouter>,
    );

    getByText = obj.getByText;
    getByTestId = obj.getByTestId;
    container = obj.container;
  });

  it('should render the name of a recipe', () => {
    expect(getByText('Schnitzel')).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveTextContent('Schnitzel');
  });

  it('should delete an entry', () => {
    fireEvent.click(getByTestId('delete-button'));
    expect(onDeleteSpy).toHaveBeenCalledWith(1);
  });

  it('should verify a snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
