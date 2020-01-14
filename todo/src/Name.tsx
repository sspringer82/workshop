import React from 'react';

interface Props {
  name: string;
}

const Name: React.FC<Props> = ({ name }) => {
  return <div>{name}</div>;

  // const condition = true;
  // const name = 'Basti!';
  // if (condition) {
  //   return <div>{name}</div>;
  // } else {
  //   return <div>{name}!!!</div>;
  // }
  // return <div>{name + (condition && '!!!')}</div>;
  // return <div>{condition ? name : name + '!!!'}</div>;
};

export default Name;
