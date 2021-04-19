import React, { useState } from 'react';

const Parent: React.FC = () => {
  const [state, setState] = useState<string[]>(['a', 'b', 'c']);

  function handleDelete(title: string) {
    // magic
  }

  return (
    <div>
      {state.map((str, i) => (
        <Child key={i} title={str} onDelete={handleDelete} />
      ))}
    </div>
  );
};

type Props = {
  title: string;
  onDelete: (title: string) => void;
};

const Child: React.FC<Props> = ({ title, onDelete }) => {
  return <div onClick={() => onDelete(title)}>{title}</div>;
};
