import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Box, Collapse, IconButton, TableCell, TableRow, Tooltip, Typography, useTheme } from '@mui/material';
import { Row as ReactTableRow, flexRender } from '@tanstack/react-table';
import { Fragment } from 'react';
import { useBoolean } from 'usehooks-ts';
import { Meta } from '../interface';

type RowProps<R> = {
  row: ReactTableRow<R>;
  setCollapsible?: (row: ReactTableRow<R>) => JSX.Element;
};

export const Row = <R,>({ row, setCollapsible }: RowProps<R>) => {
  const theme = useTheme();
  const { value: expanded, toggle: toggleCollapse } = useBoolean();

  return (
    <Fragment>
      <TableRow
        hover={!!setCollapsible}
        sx={{
          ...(expanded && { backgroundColor: theme.palette.action.hover }),
        }}
        onClick={toggleCollapse}
      >
        {setCollapsible && (
          <TableCell sx={{ p: '11px', width: 5 }}>
            <IconButton size="small">{expanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</IconButton>
          </TableCell>
        )}
        {row.getVisibleCells().map((cell) => {
          const meta = cell.column.columnDef.meta as Meta;

          return (
            <TableCell sx={{ maxWidth: cell.column.getSize(), whiteSpace: 'nowrap' }} key={cell.id} component="th">
              <Tooltip title={meta?.hideTooltip ? '' : (cell.getValue() as string)} placement="top-start">
                <Typography component="div" variant="body2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
