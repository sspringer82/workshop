import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const ReduxRezept: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    debugger;
    dispatch({ type: 'rezepteLoaded' });
  }, [dispatch]);

  return <>foo bar</>;
};

export default ReduxRezept;
