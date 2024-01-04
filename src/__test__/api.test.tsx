import '@testing-library/jest-dom';
import {
  render,
  renderHook,
  waitFor,
  screen,
  waitForElementToBeRemoved,
  fireEvent,
} from '@testing-library/react';
import { describe, it } from 'vitest';
import { getGraphQLApiErrorMessage } from '../helpers/getGraphQLApiErrorMessage';
import { localesObj } from '../dto/locales';
import { SpellingList } from '../dto/types';
import {
  useCheckEndpointQuery,
  useGetGraphQLDataQuery,
  useGetSchemaQuery,
} from '../services/api';
import WrapperWithStore from './helpers/WrapperWithStore';
import { schema } from './mocks/objects/graphql/schema';
import { server } from './mocks/server';
import { getSchemaSuccess } from './mocks/handlers/graphql/getSchemaSuccess';
import { getSchemaError } from './mocks/handlers/graphql/getSchemaError';
import MemoryRouterProvider from './helpers/MemoryRouterProvider';
import WrapperWithLocaleContext from './helpers/WrapperWithLocaleContext';
import { store } from '../store/store';
import { login } from '../store/slices/userSlice';
import { toast } from 'react-toastify';

vitest.mock('react-toastify', () => ({
  toast: {
    success: vitest.fn(),
  },
}));

describe('RTK Query api', () => {
  it('return correct checkEndpoint data', async () => {
    const { result } = renderHook(
      () =>
        useCheckEndpointQuery({
          url: 'https://graphql-pokemon2.vercel.app/',
        }),
      {
        wrapper: WrapperWithStore,
      }
    );

    await waitFor(() => {
      expect(result.current.data).toMatchObject({ data: schema });
    });
  });

  it('return correct getSchema data', async () => {
    const { result } = renderHook(
      () => useGetSchemaQuery({ url: 'https://graphql-pokemon2.vercel.app/' }),
      {
        wrapper: WrapperWithStore,
      }
    );

    await waitFor(() => {
      expect(result.current.data).toMatchObject({ data: schema });
    });
  });

  it('return correct getGraphQLData data', async () => {
    const { result } = renderHook(
      () =>
        useGetGraphQLDataQuery({
          url: 'https://graphql-pokemon2.vercel.app/',
          operationName: null,
          query: '',
          variables: {},
          headers: {},
        }),
      {
        wrapper: WrapperWithStore,
      }
    );

    await waitFor(() => {
      expect(result.current.data).toMatchObject({ data: schema });
    });
  });

  it('return error data', async () => {
    const { result } = renderHook(
      () => useGetSchemaQuery({ url: 'https://bad.endpoint.url/' }),
      {
        wrapper: WrapperWithStore,
      }
    );

    await waitFor(() => {
      expect(result.current.isError).toBeTruthy();
    });
  });
});

describe('Errors from the API side', () => {
  it('should return relevant error message', () => {
    const spellingList: SpellingList = localesObj.en;
    expect(
      getGraphQLApiErrorMessage(spellingList, { status: 0, data: '' })
    ).toBe(spellingList.graphiQLApiStatus.API_FETCH_ERROR);
    expect(
      getGraphQLApiErrorMessage(spellingList, { status: 301, data: '' })
    ).toBe(spellingList.graphiQLApiStatus.TOO_MANY_REQUESTS);
    expect(
      getGraphQLApiErrorMessage(spellingList, { status: 400, data: '' })
    ).toBe(spellingList.graphiQLApiStatus.BAD_REQUEST);
    expect(
      getGraphQLApiErrorMessage(spellingList, { status: 404, data: '' })
    ).toBe(spellingList.graphiQLApiStatus.NOT_FOUND);
    expect(
      getGraphQLApiErrorMessage(spellingList, { status: 405, data: '' })
    ).toBe(spellingList.graphiQLApiStatus.BAD_METHOD);
    expect(
      getGraphQLApiErrorMessage(spellingList, { status: 500, data: '' })
    ).toBe(spellingList.graphiQLApiStatus.SERVER_ERROR);
  });

  it('should be displayed in a user-friendly format', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="en">
          <MemoryRouterProvider initialEntries={['/graphiql']} />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    store.dispatch(login());
    await waitForElementToBeRemoved(screen.getByTestId('loader'));
    await waitFor(() => {
      expect(screen.getByTestId('graphql-page')).toBeInTheDocument();
      expect(screen.getByTestId('control-panel')).toBeInTheDocument();
    });

    const applyButton = screen.getByTestId('apply-button');
    expect(applyButton).toBeInTheDocument();

    server.use(getSchemaSuccess);

    fireEvent.click(applyButton);

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalled();
    });

    server.use(getSchemaError);

    fireEvent.click(applyButton);

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalled();
    });
  });
});
