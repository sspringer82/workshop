import React from 'react';

type Props = {
  label: string;
  onClick?: (e: any) => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button: React.FC<Props> = ({ label, onClick, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
