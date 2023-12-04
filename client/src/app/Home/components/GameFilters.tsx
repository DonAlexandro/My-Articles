import React, { useMemo } from 'react';
import { Filters } from '../../../components';
import { mapGenresToFilters } from '../presenter';
import { genreAPI } from '../../../redux/api';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { setFilterState, setSearch } from '../../../redux/slices';

export const GameFilters: React.FC = () => {
  const dispatch = useAppDispatch();
  const { filterState } = useAppSelector((state) => state.gameSlice);

  const { data: genres } = genreAPI.useFindAllQuery();

  const filters = useMemo(() => [mapGenresToFilters(genres?.data)], [genres]);

  const handleSearch = (search: string) => {
    dispatch(setSearch(search));
  };

  const handleFilterState = (key: string, value: string[]) => {
    dispatch(setFilterState({ key, value }));
  };

  return (
    <Filters setSearch={handleSearch} filterState={filterState} setFilterState={handleFilterState} filters={filters} />
  );
};
