import { beforeEach, describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';

import { Welcome } from '../index';
import renderWithRouterAndProvider from '../../../tests/utils/renderWithRouter';
import { mockDevs } from '../../../tests/mocks';

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
});
