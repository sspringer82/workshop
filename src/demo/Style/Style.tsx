import React from 'react';
import './Style.css';
import classnames from 'classnames';

import styled from 'styled-components';

const Button = styled.button`
  border-radius: 5px;
  background-color: light-grey;

  &:hover {
    background-color: hotpink;
    font-weight: bold;
    color: white;
  }
`;

const Style: React.FC = () => {
  const h1Classes = classnames({ headline: true, 'headline-bold': true });
  return (
    <div className="style">
      <h1 className={h1Classes}>Hello World</h1>
      <Button onClick={() => alert('you clicked the button')}>Click me</Button>
    </div>
  );
};

export default Style;
