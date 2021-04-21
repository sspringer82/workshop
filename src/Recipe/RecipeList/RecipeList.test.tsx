import { enableFetchMocks } from 'jest-fetch-mock';
import { render } from '@testing-library/react';
import RecipeList from './RecipeList';
import { act } from 'react-dom/test-utils';

describe('RecipeList', () => {
  beforeAll(() => {
    enableFetchMocks();
  });
  it('should render', async () => {
    fetchMock.mockResponse(
      JSON.stringify([
        {
          id: 1,
          title: 'Schnitzel',
          ingredients: ['1000g Fleisch'],
          steps: ['braten'],
        },
        {
          title: 'Milchreis',
          ingredients: ['milch', 'reis'],
          steps: ['a', 'b'],
          id: 2,
        },
      ]),
    );
    await act(async () => {
      await render(<RecipeList />);
    });
  });

  it('should fail', () => {
    fetchMock.mockReject();
  });
});
