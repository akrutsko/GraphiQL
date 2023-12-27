import { describe, expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { loadingState, notLoadingState } from '../../../tests/mocks';
import renderWithRouterAndProvider from '../../../tests/utils/renderWithRouter';

import Layout from './Layout';

vi.mock('react-firebase-hooks/auth');

describe('Layout', () => {
  test('renders LoaderBig while loading', async () => {
    vi.mocked(useAuthState).mockReturnValue(loadingState);
    await renderWithRouterAndProvider(<Layout />);
    const loaderElement = screen.getByTestId('big-loader');
    expect(loaderElement).toBeInTheDocument();
  });

  test('renders Header and Footer when not loading', async () => {
    vi.mocked(useAuthState).mockReturnValue(notLoadingState);
    await renderWithRouterAndProvider(<Layout />);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();

    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });
});
