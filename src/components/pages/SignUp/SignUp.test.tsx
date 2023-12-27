import { beforeEach, describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { vi } from 'vitest';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { SignUp } from '../index';
import renderWithRouterAndProvider from '../../../tests/utils/renderWithRouter';
import { mockRightEmail, mockRightPassword } from '../../../tests/mocks';

vi.mock('firebase/auth');

describe('Sign Up', () => {
  beforeEach(() => {
    renderWithRouterAndProvider(<SignUp />);
  });

  test('has no error messages', () => {
    expect(screen.queryByText(/confirm password is required/i)).not.toBeInTheDocument();
  });

  test('shows error messages', async () => {
    const submitElement = screen.getByText(/submit/i);
    await userEvent.click(submitElement);
    expect(screen.getByText(/confirm password is required/i)).toBeInTheDocument();
  });

  test('submits data after successful validation', async () => {
    const emailInput = screen.getByPlaceholderText(/Enter Email/i);
    const passwordInput = screen.getByPlaceholderText(/Enter Password/i);
    const confirmInput = screen.getByPlaceholderText(/Confirm Password/i);

    await userEvent.type(emailInput, mockRightEmail);
    await userEvent.type(passwordInput, mockRightPassword);
    await userEvent.type(confirmInput, mockRightPassword);

    expect(emailInput).toHaveValue(mockRightEmail);
    expect(passwordInput).toHaveValue(mockRightPassword);
    expect(confirmInput).toHaveValue(mockRightPassword);

    const submitElement = screen.getByText(/submit/i);
    await userEvent.click(submitElement);
    expect(vi.mocked(createUserWithEmailAndPassword)).toHaveBeenCalled();
  });
  test('handles sign-up error and shows notification', async () => {
    vi.mocked(createUserWithEmailAndPassword).mockRejectedValueOnce(new Error('Authentication failed'));

    const emailInput = screen.getByPlaceholderText(/Enter Email/i);
    const passwordInput = screen.getByPlaceholderText(/Enter Password/i);
    const confirmInput = screen.getByPlaceholderText(/Confirm Password/i);

    await userEvent.type(emailInput, mockRightEmail);
    await userEvent.type(passwordInput, mockRightPassword);
    await userEvent.type(confirmInput, mockRightPassword);

    const submitElement = screen.getByText(/submit/i);
    await userEvent.click(submitElement);
    expect(screen.queryByText(/Signup Failed!/i)).toBeInTheDocument();
  });
});
