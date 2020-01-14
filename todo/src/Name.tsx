import React from 'react';

interface Props {
  name: string;
  onClick: (name: string) => void;
}

const Name: React.FC<Props> = ({ name, onClick }) => {
  return (
    <div
      onClick={() => {
        onClick(name);
      }}
    >
      {name}
    </div>
  );
};

export default Name;
