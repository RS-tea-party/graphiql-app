import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import WrapperWithLocaleContext from './helpers/WrapperWithLocaleContext';
import WrapperWithStore from './helpers/WrapperWithStore';
import MemoryRouterProvider from './helpers/MemoryRouterProvider';
import DocsModal from '../components/GraphiQL/DocsModal';
import { store } from '../store/store';
import { setEndpointUrl } from '../store/slices/endpointSlice';

describe('Docs Modal', () => {
  beforeEach(() => {
    store.dispatch(setEndpointUrl('https://graphql-pokemon2.vercel.app/'));
  });
  it('', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="en">
          <MemoryRouterProvider initialEntries={['/']}>
            <DocsModal />
          </MemoryRouterProvider>
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    await waitFor(() => {
      const closeBtn = screen.getByTestId('docs-close-btn');
      expect(closeBtn).toBeInTheDocument();
    });
  });
});
