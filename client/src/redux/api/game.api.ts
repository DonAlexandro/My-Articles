import { createApi } from '@reduxjs/toolkit/query/react';
import { stringify } from 'qs';
import { baseQuery } from './base.api';
import { ExportFormat, Game, Response } from '../../shared/types';
import { PaginationDTO, GameFiltersDTO } from '../../shared/dto';

export const gameAPI = createApi({
  reducerPath: 'games',
  baseQuery,
  tagTypes: ['Games'],
  endpoints: (builder) => ({
    findAll: builder.query<Response<Game>, { pagination?: PaginationDTO; sort?: string[]; filters?: GameFiltersDTO }>({
      query: ({ pagination, sort, filters }) => {
        const searchParams = stringify(
          {
            populate: ['genres'],
            pagination,
            sort,
            ...(filters && {
              filters,
            }),
          },
          { encodeValuesOnly: true },
        );

        return {
          url: `/games?${searchParams}`,
        };
      },
      providesTags: ['Games'],
    }),
    export: builder.query<null, { format: ExportFormat; entity: string }>({
      queryFn: async ({ format, entity }, _api, _extraOptions, baseQuery) => {
        const searchParams = stringify({ format, entity });

        const result = await baseQuery({
          url: `/export?${searchParams}`,
          responseHandler: async (response) => response.arrayBuffer(),
        });

        const hiddenElement = document.createElement('a');
        const url = window.URL || window.webkitURL;
        const blob = url.createObjectURL(new Blob([result.data as ArrayBuffer]));

        hiddenElement.href = blob;
        hiddenElement.target = '_blank';
        hiddenElement.download = `${entity}_output.${format}`;
        hiddenElement.click();

        return { data: null };
      },
    }),
  }),
});
