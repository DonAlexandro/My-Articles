import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { HeaderRow, Pagination, Row } from './components';
import { DataGridProps } from './interface';

export const DataGrid = <R,>({ data, columns, loading, setCollapsible, pagination }: DataGridProps<R>) => {
  const table = useReactTable({
    columns,
    data: data ?? [],
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: 'onChange',
  });

  const { rows } = table.getRowModel();

  const mockRows = [1, 2, 3, 4, 5];

  return (
    <TableContainer component={Paper}>
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
            : rows.map((row) => <Row row={row} key={row.id} setCollapsible={setCollapsible} />)}
        </TableBody>
      </Table>
      <Pagination pagination={pagination} />
    </TableContainer>
  );
};
