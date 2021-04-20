import React, { useEffect, useState } from 'react';

function useCustomHook() {
  const [state, setState] = useState('Hallo');

  useEffect(() => {
    setTimeout(() => {
      setState('Hallo Welt');
    }, 1000);
  }, []);

  return state;
}

const CustomHooks: React.FC = () => {
  const state = useCustomHook();

  return <div>{state}</div>;
};

export default CustomHooks;
