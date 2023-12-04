import React from 'react';
import { FiltersStateType, FiltersType } from '..';
import {
  Checkbox,
  Chip,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from '@mui/material';

type FiltersSelectProps = {
  filter: FiltersType;
  filterState: FiltersStateType;
  setFilterState: (key: string, value: string[]) => void;
};

export const FiltersSelect: React.FC<FiltersSelectProps> = ({ filter, filterState, setFilterState }) => {
  return (
    <FormControl sx={{ minWidth: 195, maxWidth: 300 }} size="small">
      <InputLabel id={filter.key}>{filter.name}</InputLabel>
      <Select
        labelId={filter.key}
        multiple
        onChange={(event) => setFilterState(filter.key, event.target.value as string[])}
        defaultValue={[]}
        value={filterState[filter.key]}
        input={<OutlinedInput label={filter.name} />}
        label={filter.name}
        renderValue={(selected) => (
          <Stack direction="row" gap={0.5}>
            {selected.map((value) => (
              <Chip size="small" key={value} label={value} />
            ))}
          </Stack>
        )}
      >
        {filter.data.map((filterData) => (
          <MenuItem key={filterData.id} value={filterData.value}>
            <Checkbox checked={filterState[filter.key].indexOf(filterData.value) > -1} sx={{ pl: 0, py: 0 }} />
            <ListItemText primary={filterData.label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
