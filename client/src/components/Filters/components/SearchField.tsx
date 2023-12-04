import { TextField, debounce } from '@mui/material';
import React from 'react';

type SearchFieldProps = {
  setSearch: (search: string) => void;
};

export const SearchField: React.FC<SearchFieldProps> = ({ setSearch }) => {
  const handleSearch = debounce(setSearch, 500);

  return <TextField label="Search" size="small" onChange={(event) => handleSearch(event.target.value)} />;
};
