import { beforeEach, describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import renderWithRouterAndProvider from '../../../tests/utils/renderWithRouter';

import CustomAccordion from './CustomAccordion';

describe('CustomAccordion', () => {
  beforeEach(() => {
    renderWithRouterAndProvider(<CustomAccordion />);
  });

  test('has header and variables fields', () => {
    expect(screen.getByText(/headers/i)).toBeInTheDocument();
    expect(screen.getByText(/variables/i)).toBeInTheDocument();
  });

  test('opens textarea', async () => {
    const button = screen.getByTestId('control-Variables');
    expect(screen.queryByTestId('text-area-mini')).toBeNull();
    await userEvent.click(button);
    expect(screen.getByTestId('text-area-mini')).toBeInTheDocument();
  });

  test('has special button which toggle textarea', async () => {
    const toggleButton = screen.getByTestId('toggle-button');
    await userEvent.click(toggleButton);
    expect(screen.getByTestId('text-area-mini')).toBeInTheDocument();
    await userEvent.click(toggleButton);
    expect(screen.queryByTestId('text-area-mini')).toBeNull();
  });
});
