import { TableCell, TableRow } from '@mui/material';
import { Row as ReactTableRow, flexRender } from '@tanstack/react-table';

type RowProps<R> = {
  row: ReactTableRow<R>;
};

export const Row = <R,>({ row }: RowProps<R>) => {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      {row.getVisibleCells().map((cell) => (
        <TableCell
          key={cell.id}
          component="th"
          scope="row"
          sx={{ maxWidth: cell.column.getSize(), whiteSpace: 'nowrap' }}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  );
};
