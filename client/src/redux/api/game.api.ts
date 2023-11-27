import { createApi } from '@reduxjs/toolkit/query/react';
import { stringify } from 'qs';
import { baseQuery } from './base.api';
import { Game, Response } from '../../shared/types';

export const gameAPI = createApi({
  reducerPath: 'games',
  baseQuery,
  tagTypes: ['Games'],
  endpoints: (builder) => ({
    findAll: builder.query<Response<Game>, void>({
      query: () => {
        const searchParams = stringify({ populate: ['genres'] });

        return {
          url: `/games?${searchParams}`,
        };
      },
    }),
  }),
});
