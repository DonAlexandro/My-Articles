import DownloadIcon from '@mui/icons-material/Download';
import { Button, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { useMenu } from '../../../hooks';
import { gameAPI } from '../../../redux/api';
import { ExportFormat } from '../../../shared/types';

type ExportProps = {
  entity: string;
};

export const Export: React.FC<ExportProps> = ({ entity }) => {
  const [exportData] = gameAPI.useLazyExportQuery();

  const { handleOpen, menuAnchor, isMenuOpened, handleClose } = useMenu();

  const items = [
    {
      title: 'Download as CSV',
      key: 'csv',
    },
    {
      title: 'Download as Excel',
      key: 'xlsx',
    },
  ];

  return (
    <React.Fragment>
      <Button variant="text" startIcon={<DownloadIcon />} onClick={handleOpen}>
        Export
      </Button>
      <Menu anchorEl={menuAnchor} open={isMenuOpened} onClose={handleClose}>
        {items.map((item) => (
          <MenuItem onClick={() => exportData({ entity, format: item.key as ExportFormat })} key={item.key}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};
