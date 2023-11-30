import { ColumnDef, SortingState } from '@tanstack/react-table';
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { DataGrid } from '../components';
import { gameAPI } from '../redux/api';
import { Game } from '../shared/types';
import { Box, Chip, Stack, Typography } from '@mui/material';

export const Home: React.FC = () => {
  const [pagination, setPagination] = useState({ page: 1, pageSize: 10 });
  const [sorting, setSorting] = useState<SortingState>([]);

  const [findAll, { data: games, isLoading }] = gameAPI.useLazyFindAllQuery();

  const sort = useMemo(() => sorting.map((sortItem) => `${sortItem.id}:${sortItem.desc ? 'desc' : 'asc'}`), [sorting]);

  useEffect(() => {
    findAll({ pagination, sort });
  }, [findAll, pagination, sort]);

  const columns: ColumnDef<Game>[] = useMemo(
    () => [
      {
        id: 'title',
        accessorKey: 'attributes.title',
        header: 'Title',
        size: 100,
        meta: {
          withChevron: true,
        },
      },
      {
        id: 'short_description',
        accessorKey: 'attributes.short_description',
        header: 'Short Description',
        size: 300,
      },
      {
        id: 'price',
        accessorKey: 'attributes.price',
        header: 'Price',
        size: 50,
        meta: {
          hideTooltip: true,
        },
        cell: ({ row: { original } }) => (
          <NumericFormat value={original.attributes.price} thousandSeparator="," suffix=" UAH" displayType="text" />
        ),
      },
    ],
    [],
  );

  const setCollapsible = ({ original }: { original: Game }) => (
    <Fragment>
      <Typography variant="subtitle2">Genres</Typography>
      <Stack direction="row" gap={1}>
        {original.attributes.genres.data.map((genre) => (
          <Chip size="small" key={genre.id} label={genre.attributes.title} variant="outlined" />
        ))}
      </Stack>
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle2">Description</Typography>
        <Typography variant="body2">{original.attributes.description}</Typography>
      </Box>
    </Fragment>
  );

  return (
    <DataGrid
      columns={columns}
      data={games?.data}
      loading={isLoading}
      setCollapsible={setCollapsible}
      pagination={{
        page: pagination.page,
        pageSize: pagination.pageSize,
        setState: setPagination,
        count: games?.meta.pagination.total,
      }}
      sorting={{ setState: setSorting, state: sorting }}
    />
  );
};
