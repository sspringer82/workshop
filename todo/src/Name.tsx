import React from 'react';

export default () => {
  const condition = true;
  const name = 'Basti!';

  // if (condition) {
  //   return <div>{name}</div>;
  // } else {
  //   return <div>{name}!!!</div>;
  // }

  // return <div>{name + (condition && '!!!')}</div>;
  return <div>{condition ? name : name + '!!!'}</div>;
};
