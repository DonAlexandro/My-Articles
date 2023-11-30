import { Box, BoxProps, TableCell, TableCellProps, styled } from '@mui/material';
import { shouldForwardProp } from '../../utils';

const Resizer = styled(Box, { shouldForwardProp })<BoxProps & { $isResizing: boolean }>(({ $isResizing }) => ({
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

const HeaderCell = styled(TableCell, { shouldForwardProp })<TableCellProps & { $isSorted: string | boolean }>(
  ({ $isSorted }) => ({
    position: 'relative',

    '& .MuiIconButton-root': {
      opacity: $isSorted ? 1 : 0,
    },

    '&:hover': {
      '& .MuiIconButton-root': {
        opacity: $isSorted ? 1 : 0.5,
      },
    },
  }),
);

const Styled = { Resizer, HeaderCell };

export default Styled;
