import '@testing-library/jest-dom';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import WrapperWithLocaleContext from './helpers/WrapperWithLocaleContext';
import WrapperWithStore from './helpers/WrapperWithStore';
import ControlPanel from '../components/GraphiQL/ControlPanel';

describe('ControlPanel component', () => {
  it('renders correctly', () => {
    render(
      <WrapperWithStore>
        <WrapperWithLocaleContext lang="ru">
          <ControlPanel />
        </WrapperWithLocaleContext>
      </WrapperWithStore>
    );
    expect(
      screen.getByRole('button', { name: 'Применить' })
    ).toBeInTheDocument();
    expect(screen.getByTestId('control-panel')).toBeInTheDocument();
  });
});
