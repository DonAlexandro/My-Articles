import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './base.api';

export const genreAPI = createApi({
  reducerPath: 'genres',
  baseQuery,
  tagTypes: ['Games'],
  endpoints: (builder) => ({}),
});
