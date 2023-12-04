import { configureStore } from '@reduxjs/toolkit';
import { gameAPI, genreAPI } from './api';
import { config } from '../config';
import { gameReducer } from './slices';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    [gameAPI.reducerPath]: gameAPI.reducer,
    [genreAPI.reducerPath]: genreAPI.reducer,
    gameSlice: gameReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([gameAPI.middleware, genreAPI.middleware]),
  devTools: config.ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
