import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import { server } from './src/__test__/mocks/server';

beforeAll(async () => server.listen(), 20000);

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());
