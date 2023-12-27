import { beforeEach, describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { setAuth } from '../../../store/slices/userSlice';
import renderWithRouterAndProvider, { mockStore } from '../../../tests/utils/renderWithRouter';

import Header from './Header';

describe('Header', () => {
  beforeEach(() => {
    renderWithRouterAndProvider(<Header />);
  });

  test('renders Sign In and Sign Up buttons', () => {
    const signInButton = screen.getByText(/sign in/i);
    expect(signInButton).toBeInTheDocument();

    const signUpButton = screen.getByText(/sign up/i);
    expect(signUpButton).toBeInTheDocument();

    const signOutButton = screen.queryByText(/sign out/i);
    expect(signOutButton).not.toBeInTheDocument();
  });
  test('renders other buttons if user', () => {
    act(() => {
      mockStore.dispatch(setAuth(true));
    });

    const signUpButton = screen.queryByText(/sign up/i);
    expect(signUpButton).not.toBeInTheDocument();

    const signOutButton = screen.queryByText(/sign out/i);
    expect(signOutButton).toBeInTheDocument();

    const mainButton = screen.queryByText(/graphiql/i);
    expect(mainButton).toBeInTheDocument();
  });
});
