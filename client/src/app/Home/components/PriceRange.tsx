import { Stack, TextField } from '@mui/material';
import debounce from 'lodash.debounce';
import React, { useMemo } from 'react';
import { setFilterState } from '../../../redux/slices';
import { useAppDispatch, useAppSelector } from '../../../redux/store';

export const PriceRange = () => {
  const dispatch = useAppDispatch();
  const { filterState } = useAppSelector((state) => state.gameSlice);

  const { price } = filterState;

  const handleChange = debounce((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: string) => {
    const value = +event.target.value;

    if (typeof value === 'number' && value <= 300 && value >= 0) {
      dispatch(setFilterState({ key: 'price', value: key === 'start' ? [value, price[1]] : [price[0], value] }));
    }
  }, 500);

  const fields = useMemo(
    () => [
      {
        label: 'Start price ($)',
        value: price[0],
        key: 'start',
      },
      {
        label: 'End price ($)',
        value: price[1],
        key: 'end',
      },
    ],
    [price],
  );

  return (
    <Stack key="price" direction="row" gap={1}>
      {fields.map((field) => (
        <TextField
          key={field.key}
          label={field.label}
          type="number"
          size="small"
          defaultValue={field.value}
          onChange={(event) => handleChange(event, field.key)}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{ inputProps: { min: 0, max: 300 } }}
          sx={{ width: 100 }}
        />
      ))}
    </Stack>
  );
};
