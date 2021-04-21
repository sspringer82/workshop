import React from 'react';
import { render, screen } from '@testing-library/react';
import Dummy from './Dummy';

describe('Dummy', () => {
  it('should render', () => {
    const { getByTestId } = render(<Dummy />);

    const container = getByTestId('container');

    expect(container).toHaveTextContent('Hallo Welt');
  });
});
