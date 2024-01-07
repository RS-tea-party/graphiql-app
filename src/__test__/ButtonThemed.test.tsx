import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import WrapperWithLocaleContext from './helpers/WrapperWithLocaleContext';
import WrapperWithStore from './helpers/WrapperWithStore';
import ButtonThemed from '../components/_ui/ButtonThemed/ButtonThemed';

describe('ButtonThemed component', () => {
  it('renders correctly', () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <ButtonThemed>TestButton</ButtonThemed>
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    expect(
      screen.getByRole('button', { name: 'TestButton' })
    ).toBeInTheDocument();
  });
  it('tooltip renders correctly', () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <ButtonThemed tooltip={{ text: 'TestTooltip', position: 'bottom' }}>
            TestButton
          </ButtonThemed>
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    fireEvent.mouseEnter(screen.getByRole('button', { name: 'TestButton' }));
    expect(screen.getByText('TestTooltip')).toBeInTheDocument();
  });
});
