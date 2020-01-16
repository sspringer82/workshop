import React, { useRef } from 'react';

const Uncontrolled: React.FC = () => {
  const input = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input ref={input} />
      <button
        onClick={() => {
          console.log(input.current?.value);
          debugger;
        }}
      >
        click me
      </button>
    </div>
  );
};

export default Uncontrolled;
