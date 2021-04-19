import React, { useState } from 'react';

const Event: React.FC = () => {
  const [state, setState] = useState(false);

  function handleClick() {
    setState((oldState) => {
      return !oldState;
    });
  }

  return (
    <div>
      <button onClick={handleClick}>{state ? 'An' : 'Aus'}</button>
    </div>
  );
};

export default Event;
