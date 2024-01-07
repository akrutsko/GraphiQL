import { beforeEach, describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { Welcome } from '../index';
import renderWithRouterAndProvider, { mockStore } from '../../../tests/utils/renderWithRouter';
import { mockDevs } from '../../../tests/mocks';
import { setAuth } from '../../../store/slices/userSlice';

describe('Welcome', () => {
  beforeEach(() => {
    renderWithRouterAndProvider(<Welcome />);
  });

  test('has developers cards', () => {
    mockDevs.forEach((name) => {
      const link = screen.getByText(name);
      expect(link).toBeInTheDocument();
    });
  });

  test('button depends on auth status', () => {
    act(() => mockStore.dispatch(setAuth(false)));

    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    expect(screen.queryByText('GraphiQL')).not.toBeInTheDocument();

    act(() => mockStore.dispatch(setAuth(true)));

    expect(screen.getByText('GraphiQL')).toBeInTheDocument();
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign ip/i)).not.toBeInTheDocument();
  });
});
