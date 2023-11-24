import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './base.api';

export const gameAPI = createApi({
  reducerPath: 'games',
  baseQuery,
  tagTypes: ['Games'],
  endpoints: (builder) => ({}),
});
