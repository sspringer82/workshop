import React, { ChangeEvent } from 'react';

type Props = {
  filter: string;
  onFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Filer: React.FC<Props> = ({ filter, onFilterChange }) => {
  return (
    <label>
      Find recipes:
      <input
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
};

export default Filer;
