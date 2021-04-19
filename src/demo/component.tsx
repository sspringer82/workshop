import React from 'react';

const Component = () => {
  const a = [1, 2, 3];

  const cond = false;

  // if (cond) {
  //   return <div>xxx</div>
  // } else {
  //   return <div>yyy</div>
  // }

  // let object = <div>xxx</div>;
  // if (cond === false) {
  //   object = <div>yyyy</div>;
  // }

  // return object;s

  return (
    <>
      <div>
        {a.map((e) => {
          return <div>{e}</div>;
        })}
      </div>
      <div>{cond ? <div>cond is true</div> : <div>cond is false</div>}</div>
    </>
  );
};

export default Component;
