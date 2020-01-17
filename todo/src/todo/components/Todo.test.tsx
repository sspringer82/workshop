import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import Todo from './Todo';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('<Todo>', () => {
  describe('add', () => {
    let add: (a: number, b: number) => number;

    beforeEach(() => {
      // arrange
      add = (a: number, b: number): number => a + b;
    });

    it('should add 1 and 1 and return 2', () => {
      // act
      const result = add(1, 1);
      // assert
      expect(result).toBe(2);
      expect(result).not.toBe(3);
      expect(result).toBeGreaterThan(1);
      expect(result).toBeLessThan(3);
    });
    it('should add 2 and 2 and return 4', () => {
      // act
      const result = add(2, 2);
      // assert
      expect(result).toBe(4);
    });
  });

  it('Render the component', () => {
    const todo = { id: 'aaa', title: 'bbb', done: false };
    const { getByTestId } = render(
      <Router>
        <Todo todo={todo} onStatusChange={() => {}} />
      </Router>
    );

    const title = getByTestId('title').textContent;
    expect(title).toBe('bbb');
  });

  it('should change the status', async () => {
    const cb = jest.fn();

    const todo = { id: 'aaa', title: 'bbb', done: false };
    const { getByTestId } = render(
      <Router>
        <Todo todo={todo} onStatusChange={cb} />
      </Router>
    );
    const changeStatusButton = getByTestId('changeStatus');
    await wait(() => {
      fireEvent.click(changeStatusButton);
    });

    expect(cb).toHaveBeenCalled();
    expect(cb).toHaveBeenCalledWith({ id: 'aaa', title: 'bbb', done: false });
  });

  it('renders correctly', () => {
    const todo = { id: 'aaa', title: 'bbb', done: false };
    const tree = renderer
      .create(
        <Router>
          <Todo todo={todo} onStatusChange={() => {}} />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
