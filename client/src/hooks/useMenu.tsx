import { useState } from 'react';

export const useMenu = () => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

  const isMenuOpened = Boolean(menuAnchor);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setMenuAnchor(null);
  };

  return { menuAnchor, isMenuOpened, handleOpen, handleClose };
};
