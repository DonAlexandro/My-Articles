import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, ListItemIcon, ListItemText, Menu, MenuItem, useTheme } from '@mui/material';
import React from 'react';
import { useMenu } from '../../../hooks';

type DensitySelectProps = {
  size: 'small' | 'medium';
  setSize: React.Dispatch<React.SetStateAction<'small' | 'medium'>>;
};

export const DensitySelect: React.FC<DensitySelectProps> = ({ setSize, size }) => {
  const theme = useTheme();
  const { menuAnchor, handleClose, handleOpen, isMenuOpened } = useMenu();

  const items = [
    {
      title: 'Compact',
      icon: <DensitySmallIcon />,
      onClick: () => setSize('small'),
      key: 'small',
    },
    {
      title: 'Standard',
      icon: <DensityMediumIcon />,
      onClick: () => setSize('medium'),
      key: 'medium',
    },
  ];

  return (
    <React.Fragment>
      <Button variant="text" startIcon={<MenuIcon />} onClick={handleOpen}>
        Density
      </Button>
      <Menu anchorEl={menuAnchor} open={isMenuOpened} onClose={handleClose}>
        {items.map((item) => (
          <MenuItem
            onClick={item.onClick}
            key={item.key}
            sx={{ ...(size === item.key && { background: theme.palette.action.hover }) }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.title}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};
