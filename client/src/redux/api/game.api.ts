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
    findAll: builder.query<Response<Game>, { pagination?: PaginationDTO; sort?: string[]; search?: string }>({
      query: ({ pagination, sort, search }) => {
        const searchParams = stringify({
          populate: ['genres'],
          pagination,
          sort,
          ...(search && {
            filters: {
              $or: [
                {
                  title: { $containsi: search },
                },
                {
                  short_description: { $containsi: search },
                },
              ],
            },
          }),
        });

        return {
          url: `/games?${searchParams}`,
        };
      },
    }),
  }),
});
