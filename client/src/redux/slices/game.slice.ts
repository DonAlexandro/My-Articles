import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type GameSliceInitialState = {
  search: string;
  filterState: {
    genres: string[];
    price: number[];
  };
};

const initialState: GameSliceInitialState = {
  search: '',
  filterState: { genres: [], price: [0, 300] },
};

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setFilterState(state, action: PayloadAction<{ key: string; value: string[] | number[] }>) {
      state.filterState = { ...state.filterState, [action.payload.key]: action.payload.value };
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setFilterState, setSearch } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
