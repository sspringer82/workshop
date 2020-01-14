import React, { useState, useEffect } from 'react';

// interal state - name - initial 'world'
// nach 4000 ms - set name - 'Basti'

const Greet: React.FC = () => {
  const [name, setName] = useState('World');

  useEffect(() => {
    setTimeout(() => {
      setName('Basti');
    }, 4000);
  }, []);

  return <div>Hello {name}!</div>;
};

export default Greet;
