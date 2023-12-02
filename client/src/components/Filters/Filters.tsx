import { Box, TextField } from '@mui/material';
import debounce from 'lodash.debounce';
import { FC } from 'react';

type FiltersProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const Filters: FC<FiltersProps> = ({ setSearch }) => {
  const handleSearch = debounce(setSearch, 500);

  return (
    <Box>
      <TextField label="Search" size="small" onChange={(event) => handleSearch(event.target.value)} />
    </Box>
  );
};
