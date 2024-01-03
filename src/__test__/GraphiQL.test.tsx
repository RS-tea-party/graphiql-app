import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import WrapperWithLocaleContext from './helpers/WrapperWithLocaleContext';
import WrapperWithStore from './helpers/WrapperWithStore';
import GraphiQL from '../pages/GraphiQL/GraphiQL';

describe('GraphiQL component', () => {
  it('renders correctly', () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <GraphiQL />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    expect(
      screen.getByRole('button', { name: 'Применить' })
    ).toBeInTheDocument();
    expect(
      screen
        .getByTestId('btn-send')
        .classList.contains('disabled:pointer-events-none')
    ).toBeTruthy;
  });

  it('Button gets enabled after recieving endpoint response', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <GraphiQL />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    fireEvent.click(screen.getByRole('button', { name: 'Применить' }));
    await waitFor(() => {
      expect(
        screen
          .getByTestId('btn-send')
          .classList.contains('disabled:pointer-events-none')
      ).toBeFalsy;
    });
  });

  it('Button', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <GraphiQL />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    fireEvent.click(screen.getByRole('tab', { name: 'Переменные' }));
    await waitFor(() => {
      expect(screen.getByTestId('tabpanel-variables').style.opacity === '1')
        .toBeTruthy;
    });
  });
  it('Button', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <GraphiQL />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    fireEvent.click(screen.getByRole('tab', { name: 'Заголовки' }));
    await waitFor(() => {
      expect(screen.getByTestId('tabpanel-header').style.opacity === '1')
        .toBeTruthy;
    });
  });
  it('Button', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <GraphiQL />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    fireEvent.click(screen.getByRole('tab', { name: 'Заголовки' }));
    fireEvent.click(screen.getByTestId('tabs-shevron-btn'));
    await waitFor(() => {
      expect(screen.getByTestId('tabs-body').style.height === '0px').toBeTruthy;
    });
  });
});
