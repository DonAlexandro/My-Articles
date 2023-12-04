import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './base.api';
import { Genre, Response } from '../../shared/types';

export const genreAPI = createApi({
  reducerPath: 'genres',
  baseQuery,
  tagTypes: ['Genres'],
  endpoints: (builder) => ({
    findAll: builder.query<Response<Genre>, void>({
      query: () => ({
        url: '/genres',
      }),
    }),
  }),
});
