import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

type Props = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};

const Filer: React.FC<Props> = ({ filter, setFilter }) => {
  function handleFilterChange(e: ChangeEvent<HTMLInputElement>): void {
    setFilter(e.target.value);
  }

  return (
    <label>
      Find recipes:
      <input
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};

export default Filer;
