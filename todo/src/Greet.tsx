import React, { useState, useEffect } from 'react';

// interal state - name - initial 'world'
// nach 4000 ms - set name - 'Basti'

const Greet: React.FC = () => {
  const [name, setName] = useState('World');

  useEffect(() => {
    setTimeout(() => {
      setName('Basti');
    }, 100);
  }, []);

  useEffect(() => {
    console.log('name changed');
  }, [name]);

  return <div>Hello {name}!</div>;
};

export default Greet;
