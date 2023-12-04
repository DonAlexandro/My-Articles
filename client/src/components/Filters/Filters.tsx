import { Stack } from '@mui/material';
import { FC } from 'react';
import { FiltersStateType, FiltersType } from '.';
import { FiltersSelect, SearchField } from './components';

type FiltersProps = {
  setSearch: (search: string) => void;
  filterState: FiltersStateType;
  setFilterState: (key: string, value: string[]) => void;
  filters: FiltersType[];
};

export const Filters: FC<FiltersProps> = ({ setSearch, filterState, filters, setFilterState }) => {
  return (
    <Stack direction="row" gap={2}>
      <SearchField setSearch={setSearch} />
      {filters.map((filter) => (
        <FiltersSelect key={filter.key} filter={filter} setFilterState={setFilterState} filterState={filterState} />
      ))}
    </Stack>
  );
};
