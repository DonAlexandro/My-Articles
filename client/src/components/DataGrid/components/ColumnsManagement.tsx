import { ViewColumn } from '@mui/icons-material';
import { Box, Button, Menu, MenuItem, Switch } from '@mui/material';
import { Table } from '@tanstack/react-table';
import React from 'react';
import { useMenu } from '../../../hooks';

type ColumnsManagementProps<R> = {
  table: Table<R>;
};

export const ColumnsManagement = <R,>({ table }: ColumnsManagementProps<R>) => {
  const { menuAnchor, isMenuOpened, handleClose, handleOpen } = useMenu();

  return (
    <React.Fragment>
      <Button variant="text" startIcon={<ViewColumn />} onClick={handleOpen}>
        Columns
      </Button>
      <Menu anchorEl={menuAnchor} open={isMenuOpened} onClose={handleClose}>
        {table.getAllLeafColumns().map((column) => (
          <MenuItem key={column.id} sx={{ py: '3px', px: 1 }} onClick={column.getToggleVisibilityHandler()}>
            <Switch size="small" checked={column.getIsVisible()} sx={{ mr: 0.5 }} />
            {column.columnDef.header?.toString()}
          </MenuItem>
        ))}
        <Box sx={{ mt: 2, px: 1 }}>
          <Button sx={{ width: '100%' }} onClick={table.getToggleAllColumnsVisibilityHandler()}>
            Toggle All
          </Button>
        </Box>
      </Menu>
    </React.Fragment>
  );
};
