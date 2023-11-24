import { configureStore } from '@reduxjs/toolkit';
import { gameAPI, genreAPI } from './api';
import { config } from '../config';

export const store = configureStore({
  reducer: {
    [gameAPI.reducerPath]: gameAPI.reducer,
    [genreAPI.reducerPath]: genreAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([gameAPI.middleware, genreAPI.middleware]),
  devTools: config.ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
