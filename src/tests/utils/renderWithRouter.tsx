import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import { store } from '../../store/store';

export const mockStore = { ...store };

const Wrapper = (children: ReactNode) => {
  return <Provider store={mockStore}>{children}</Provider>;
};

async function renderWithRouterAndProvider(children: ReactNode) {
  return await act(async () => await render(<MemoryRouter>{Wrapper(children)}</MemoryRouter>));
}

export default renderWithRouterAndProvider;
