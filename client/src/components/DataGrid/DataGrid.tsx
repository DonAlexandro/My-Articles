import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useMemo } from 'react';
import { HeaderRow, Row } from './components';
import { DataGridProps } from './interface';

export const DataGrid = <R,>({ data, columns, loading, setCollapsible }: DataGridProps<R>) => {
  const table = useReactTable({
    columns,
    data: data ?? [],
    getCoreRowModel: getCoreRowModel(),
  });

  const { rows } = table.getRowModel();

  const { head, body } = useMemo(() => {
    if (loading) {
      return {
        head: (
          <TableHead>
            <TableRow>
              {[1, 2, 3, 4, 5].map((header) => (
                <TableCell key={header}>
                  <Skeleton variant="rounded" width={210} height={30} />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        ),
        body: (
          <TableBody>
            {[1, 2, 3, 4, 5].map((item) => (
              <TableRow key={item}>
                {[1, 2, 3, 4, 5].map((item) => (
                  <TableCell key={item}>
                    <Skeleton variant="rounded" width={210} height={30} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        ),
      };
    }

    return {
      head: (
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <HeaderRow headerGroup={headerGroup} key={headerGroup.id} setCollapsible={setCollapsible} />
          ))}
        </TableHead>
      ),
      body: (
        <TableBody>
          {rows.map((row) => (
            <Row row={row} key={row.id} setCollapsible={setCollapsible} />
          ))}
        </TableBody>
      ),
    };
  }, [loading, rows, table, setCollapsible]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: table.getTotalSize() }}>
        {head}
        {body}
      </Table>
    </TableContainer>
  );
};
