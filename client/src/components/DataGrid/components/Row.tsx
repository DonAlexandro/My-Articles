import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Box, Checkbox, Collapse, IconButton, TableCell, TableRow, Tooltip, Typography, useTheme } from '@mui/material';
import { Cell, Row as ReactTableRow, flexRender } from '@tanstack/react-table';
import { Fragment, useCallback } from 'react';
import Highlighter from 'react-highlight-words';
import { useBoolean } from 'usehooks-ts';
import { Meta } from '../interface';

type RowProps<R> = {
  row: ReactTableRow<R>;
  size: 'small' | 'medium';
  setCollapsible?: (row: ReactTableRow<R>) => JSX.Element;
  search?: string;
};

export const Row = <R,>({ row, setCollapsible, search, size }: RowProps<R>) => {
  const theme = useTheme();
  const { value: expanded, toggle: toggleCollapse } = useBoolean();

  const getSearchedValue = useCallback(
    (cell: Cell<R, unknown>) => {
      if (search) {
        return <Highlighter searchWords={[search]} textToHighlight={cell.getValue() as string} />;
      }

      return flexRender(cell.column.columnDef.cell, cell.getContext());
    },
    [search],
  );

  return (
    <Fragment>
      <TableRow
        hover={!!setCollapsible}
        sx={{
          ...(expanded && { backgroundColor: theme.palette.action.hover }),
        }}
        onClick={toggleCollapse}
      >
        <TableCell
          onClick={(event) => event.stopPropagation()}
          sx={{ ...(size === 'medium' && { p: '11px' }), width: 5 }}
        >
          <Checkbox
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            indeterminate={row.getIsSomeSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
          {setCollapsible && (
            <IconButton size="small" onClick={toggleCollapse}>
              {expanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          )}
        </TableCell>
        {row.getVisibleCells().map((cell) => {
          const meta = cell.column.columnDef.meta as Meta;

          return (
            <TableCell sx={{ maxWidth: cell.column.getSize(), whiteSpace: 'nowrap' }} key={cell.id} component="th">
              <Tooltip title={meta?.hideTooltip ? '' : (cell.getValue() as string)} placement="top-start">
                <Typography component="div" variant="body2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {meta?.flexRender
                    ? flexRender(cell.column.columnDef.cell, cell.getContext())
                    : getSearchedValue(cell)}
                </Typography>
              </Tooltip>
            </TableCell>
          );
        })}
      </TableRow>
      {setCollapsible && (
        <TableRow>
          <TableCell sx={{ py: 0, ...(!expanded && { borderBottom: 'none' }) }} colSpan={6}>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Box sx={{ py: 2 }}>{setCollapsible(row)}</Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </Fragment>
  );
};
