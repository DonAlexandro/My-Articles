import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { IconButton, TableCell, TableRow, Typography } from '@mui/material';
import { HeaderGroup, Row, flexRender } from '@tanstack/react-table';
import Styled from '../datagrid.styled';

type HeaderRowProps<R> = {
  headerGroup: HeaderGroup<R>;
  setCollapsible?: (row: Row<R>) => JSX.Element;
};

export const HeaderRow = <R,>({ headerGroup, setCollapsible }: HeaderRowProps<R>) => {
  return (
    <TableRow>
      {setCollapsible && <TableCell sx={{ width: 10 }} />}
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
