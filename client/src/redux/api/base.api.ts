import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { config } from '../../config';

export const baseQuery = fetchBaseQuery({
  baseUrl: config.API_URL,
  prepareHeaders(headers) {
    headers.set('Authorization', `Bearer ${config.API_TOKEN}`);

    return headers;
  },
});
