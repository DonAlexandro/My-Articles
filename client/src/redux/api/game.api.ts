import { createApi } from '@reduxjs/toolkit/query/react';
import { stringify } from 'qs';
import { baseQuery } from './base.api';
import { Game, Response } from '../../shared/types';
import { PaginationDTO } from '../../shared/dto';

export const gameAPI = createApi({
  reducerPath: 'games',
  baseQuery,
  tagTypes: ['Games'],
  endpoints: (builder) => ({
    findAll: builder.query<Response<Game>, { pagination?: PaginationDTO; sort?: string[] }>({
      query: ({ pagination, sort }) => {
        const searchParams = stringify({ populate: ['genres'], pagination, sort });

        return {
          url: `/games?${searchParams}`,
        };
      },
    }),
  }),
});
