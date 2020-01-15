import React, { useState, ChangeEvent } from 'react';

const Form: React.FC = () => {
  const [value, setValue] = useState({ firstname: 'john', lastname: 'doe' });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    setValue(prevValue => {
      const newValue = {
        ...prevValue,
        [key]: value,
      };
      return newValue;
    });
  }
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log(
          'you submitted the form with: ',
          value.firstname,
          value.lastname
        );
      }}
    >
      <div>Form Works</div>
      <input name="firstname" value={value.firstname} onChange={handleChange} />
      <input name="lastname" value={value.lastname} onChange={handleChange} />
      <button type="submit">speichern</button>
    </form>
  );
};

export default Form;
