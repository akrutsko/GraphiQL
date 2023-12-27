import { beforeEach, describe, expect, test, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { SingIn } from '../index';
import renderWithRouterAndProvider from '../../../tests/utils/renderWithRouter';
import { mockRightEmail, mockRightPassword } from '../../../tests/mocks';

vi.mock('firebase/auth');

describe('Sign In', () => {
  beforeEach(() => {
    renderWithRouterAndProvider(<SingIn />);
  });

  test('has no error messages', () => {
    expect(screen.queryByText(/email is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/password is required/i)).not.toBeInTheDocument();
  });

  test('shows error messages', async () => {
    const submitElement = screen.getByText(/submit/i);
    await userEvent.click(submitElement);
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/password is required/i)).toBeInTheDocument();
  });

  test('shows password', async () => {
    const passwordInput = screen.getByPlaceholderText(/Enter Password/i);
    expect(passwordInput).toHaveAttribute('type', 'password');
    const lockerButton = screen.getByTestId('locker');
    await userEvent.click(lockerButton);
    expect(passwordInput).toHaveAttribute('type', 'text');
  });

  test('submits data after successful validation', async () => {
    const emailInput = screen.getByPlaceholderText(/Enter Email/i);
    const passwordInput = screen.getByPlaceholderText(/Enter Password/i);

    await userEvent.type(emailInput, mockRightEmail);
    await userEvent.type(passwordInput, mockRightPassword);

    expect(emailInput).toHaveValue(mockRightEmail);
    expect(passwordInput).toHaveValue(mockRightPassword);

    const submitElement = screen.getByText(/submit/i);
    await userEvent.click(submitElement);
    expect(vi.mocked(signInWithEmailAndPassword)).toHaveBeenCalled();
  });
  test('handles sign-in error and shows notification', async () => {
    vi.mocked(signInWithEmailAndPassword).mockRejectedValueOnce(new Error('Authentication failed'));

    const emailInput = screen.getByPlaceholderText(/Enter Email/i);
    const passwordInput = screen.getByPlaceholderText(/Enter Password/i);

    await userEvent.type(emailInput, mockRightEmail);
    await userEvent.type(passwordInput, mockRightPassword);

    const submitElement = screen.getByText(/submit/i);
    await userEvent.click(submitElement);
    expect(screen.queryByText(/Login Failed!/i)).toBeInTheDocument();
  });
});
