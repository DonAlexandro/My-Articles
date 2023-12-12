import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { Checkbox, IconButton, TableCell, TableRow, Typography } from '@mui/material';
import { HeaderGroup, Table, flexRender } from '@tanstack/react-table';
import Styled from '../datagrid.styled';

type HeaderRowProps<R> = {
  headerGroup: HeaderGroup<R>;
  table: Table<R>;
  size: 'small' | 'medium';
};

export const HeaderRow = <R,>({ headerGroup, table, size }: HeaderRowProps<R>) => {
  return (
    <TableRow>
      <TableCell sx={{ width: 20, ...(size === 'medium' && { p: '11px' }) }}>
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          indeterminate={table.getIsSomeRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      </TableCell>
      {headerGroup.headers.map((header) => (
        <Styled.HeaderCell
          component="th"
          colSpan={header.colSpan}
          sx={{
            width: header.getSize(),
            cursor: header.column.getCanSort() ? 'pointer' : 'default',
          }}
          key={header.id}
          $isSorted={header.column.getIsSorted()}
        >
          <Typography variant="subtitle2">
            {flexRender(header.column.columnDef.header, header.getContext())}
            <IconButton onClick={header.column.getToggleSortingHandler()} size="small">
              {{
                asc: <ArrowUpward fontSize="small" />,
                desc: <ArrowDownward fontSize="small" />,
              }[header.column.getIsSorted() as string] ?? <ArrowUpward fontSize="small" />}
            </IconButton>
          </Typography>
          <Styled.Resizer
            onMouseDown={header.getResizeHandler()}
            onTouchStart={header.getResizeHandler()}
            $isResizing={header.column.getIsResizing()}
          />
        </Styled.HeaderCell>
      ))}
    </TableRow>
  );
};
