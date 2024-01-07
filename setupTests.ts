import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import { server } from './src/__test__/mocks/server';
import { store } from './src/store/store';
import api from './src/services/api';

beforeAll(async () => server.listen(), 20000);

afterEach(() => {
  server.resetHandlers();
  cleanup();
  store.dispatch(api.util.resetApiState());
});

afterAll(() => server.close());
