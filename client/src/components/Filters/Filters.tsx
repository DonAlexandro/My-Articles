import { Stack } from '@mui/material';
import { FC } from 'react';
import { FiltersStateType, FiltersType } from '.';
import { FiltersSelect, SearchField } from './components';

type FiltersProps = {
  setSearch: (search: string) => void;
  filterState: FiltersStateType;
  setFilterState: (key: string, value: string[]) => void;
  filters: FiltersType[];
  extra?: JSX.Element[];
};

export const Filters: FC<FiltersProps> = ({ setSearch, filterState, filters, setFilterState, extra }) => {
  return (
    <Stack direction="row" gap={2}>
      <SearchField setSearch={setSearch} />
      {filters.map((filter) => (
        <FiltersSelect key={filter.key} filter={filter} setFilterState={setFilterState} filterState={filterState} />
      ))}
      {extra?.length && extra.map((Component) => Component)}
    </Stack>
  );
};
