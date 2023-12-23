import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setEndpointState } from '../store/slices/endpointSlice';
import { DOCUMENTATION_QUERY } from '../dto/constants';
import { resetResult } from '../store/slices/resultSlice';
import { GetGraphQLDataQueryParams, GetSchemaQueryParams } from '../dto/types';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getSchema: builder.query<string, GetSchemaQueryParams>({
      query: ({ url }) => ({
        url,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          operationName: 'IntrospectionQuery',
          variables: {},
          query: DOCUMENTATION_QUERY,
        }),
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setEndpointState({ isLoading: true, isValid: false }));
        try {
          await queryFulfilled;
          dispatch(setEndpointState({ isLoading: false, isValid: true }));
          dispatch(resetResult());
        } catch (err) {
          dispatch(setEndpointState({ isLoading: false, isValid: false }));
        }
      },
    }),
    getGraphQLData: builder.query<string, GetGraphQLDataQueryParams>({
      query: ({ url, operationName, query, variables }) => ({
        url,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          operationName: operationName || null,
          variables: variables || {},
          query,
        }),
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setEndpointState({ isLoading: true }));
        try {
          await queryFulfilled;
          dispatch(setEndpointState({ isLoading: false }));
        } catch (err) {
          dispatch(setEndpointState({ isLoading: false }));
        }
      },
    }),
  }),
});

export default api;
export const {
  useGetSchemaQuery,
  useGetGraphQLDataQuery,
  useLazyGetSchemaQuery,
  useLazyGetGraphQLDataQuery,
} = api;
