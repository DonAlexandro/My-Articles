import { Box, Card, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { ColumnsManagement, HeaderRow, Pagination, Row } from './components';
import { DataGridProps } from './interface';
import { columnsAdapter } from '../../storage';

export const DataGrid = <R,>({
  id,
  data,
  columns,
  loading,
  setCollapsible,
  pagination,
  sorting,
  search,
}: DataGridProps<R>) => {
  const [columnVisibility, setColumnVisibility] = useState({});

  const table = useReactTable({
    columns,
    data: data ?? [],
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: 'onChange',
    manualSorting: true,
    state: {
      sorting: sorting?.state,
      columnVisibility,
    },
    onSortingChange: sorting?.setState,
    onColumnVisibilityChange: setColumnVisibility,
  });

  const { rows } = table.getRowModel();

  const mockRows = [1, 2, 3, 4, 5];

  useEffect(() => {
    columnsAdapter.setColumnVisibility(id, columnVisibility);
  }, [columnVisibility, id]);

  useEffect(() => {
    const fetchColumnVisibility = async () => {
      const columnVisibility = await columnsAdapter.getColumnVisibility();

      setColumnVisibility(columnVisibility[id]);
    };

    fetchColumnVisibility();
  }, [id]);

  return (
    <TableContainer component={Card}>
      <Box sx={{ p: 1 }}>
        <ColumnsManagement table={table} />
      </Box>
      <Table sx={{ minWidth: table.getTotalSize() }}>
        <TableHead>
          {loading ? (
            <TableRow>
              {mockRows.map((header) => (
                <TableCell key={header}>
                  <Skeleton variant="rounded" width={210} height={30} />
                </TableCell>
              ))}
            </TableRow>
          ) : (
            table
              .getHeaderGroups()
              .map((headerGroup) => (
                <HeaderRow headerGroup={headerGroup} key={headerGroup.id} setCollapsible={setCollapsible} />
              ))
          )}
        </TableHead>
        <TableBody>
          {loading
            ? mockRows.map((item) => (
                <TableRow key={item}>
                  {mockRows.map((item) => (
                    <TableCell key={item}>
                      <Skeleton variant="rounded" width={210} height={30} />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            : rows.map((row) => <Row row={row} key={row.id} setCollapsible={setCollapsible} search={search} />)}
        </TableBody>
      </Table>
      <Pagination pagination={pagination} />
    </TableContainer>
  );
};
