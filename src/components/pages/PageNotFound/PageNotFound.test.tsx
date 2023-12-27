import { beforeEach, describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';

import { PageNotFound } from '../index';
import renderWithRouterAndProvider from '../../../tests/utils/renderWithRouter';

describe('404', () => {
  beforeEach(() => {
    renderWithRouterAndProvider(<PageNotFound />);
  });

  test('has button to welcome', () => {
    const welcomeButton = screen.getByText(/welcome/i);
    expect(welcomeButton).toBeInTheDocument();
  });
});
