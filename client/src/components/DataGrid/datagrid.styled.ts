import { Box, BoxProps, styled } from '@mui/material';

const Resizer = styled(Box)<BoxProps & { $isResizing: boolean }>(({ $isResizing }) => ({
  position: 'absolute',
  right: 0,
  top: 0,
  height: '100%',
  width: '5px',
  background: 'rgba(0, 0, 0, 0.5)',
  cursor: 'col-resize',
  userSelect: 'none',
  touchAction: 'none',
  opacity: 0,

  '&:hover': {
    opacity: 1,
  },

  ...($isResizing && {
    background: 'blue',
    opacity: 1,
  }),
}));

const Styled = { Resizer };

export default Styled;
