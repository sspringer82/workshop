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
    <div className="pl-6 py-2">
      <label>
        Rezepte durchsuchen:
        <input
          className="border ml-2"
          type="text"
          name="filter"
          id="filter"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};

export default Filer;
