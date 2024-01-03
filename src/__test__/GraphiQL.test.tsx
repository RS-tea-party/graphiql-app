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

  it('Send button gets enabled/disabled correctly', async () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <GraphiQL />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    fireEvent.click(screen.getByRole('button', { name: 'Применить' }));
    await waitFor(async () => {
      expect(
        screen
          .getByTestId('btn-send')
          .classList.contains('disabled:pointer-events-none')
      ).toBeFalsy;
      fireEvent.click(screen.getByRole('button', { name: 'Изменить' }));
      await waitFor(async () => {
        expect(
          screen
            .getByTestId('btn-send')
            .classList.contains('disabled:pointer-events-none')
        ).toBeTruthy;
      });
    });
  });

  it('Secondary editor expands correct tab when clicking on variables', async () => {
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
  it('Secondary editor expands correct tab when clicking on header', async () => {
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
  it('Secondary editor collapses correctty when clicking on shevron button', async () => {
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
