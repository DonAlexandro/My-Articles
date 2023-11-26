import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { DataGridProps } from './interface';
import { HeaderRow, Row } from './components';

export const DataGrid = <R,>({ data, columns }: DataGridProps<R>) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  const { rows } = table.getRowModel();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: table.getTotalSize() }}>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <HeaderRow headerGroup={headerGroup} key={headerGroup.id} />
          ))}
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
