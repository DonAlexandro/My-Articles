import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  filterState: { genres: [] },
};

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setFilterState(state, action: PayloadAction<{ key: string; value: string[] }>) {
      state.filterState = { ...state.filterState, [action.payload.key]: action.payload.value };
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setFilterState, setSearch } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
