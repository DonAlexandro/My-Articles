import { TableCell, TableRow } from '@mui/material';
import { HeaderGroup, flexRender } from '@tanstack/react-table';

type HeaderRowProps<R> = {
  headerGroup: HeaderGroup<R>;
};

export const HeaderRow = <R,>({ headerGroup }: HeaderRowProps<R>) => {
  return (
    <TableRow>
      {headerGroup.headers.map((header) => (
        <TableCell
          component="th"
          colSpan={header.colSpan}
          sx={{
            width: header.getSize(),
            position: 'relative',
          }}
          key={header.id}
        >
          {flexRender(header.column.columnDef.header, header.getContext())}
        </TableCell>
      ))}
    </TableRow>
  );
};
