import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';

import { ENDPOINT } from '../../../constants';
import renderWithRouterAndProvider from '../../../tests/utils/renderWithRouter';
import { GraphiQL } from '../index';

describe('GrapiQL', () => {
  beforeEach(async () => {
    await renderWithRouterAndProvider(<GraphiQL />);
  });

  test('has default value', async () => {
    const input = screen.getByRole('textbox', { name: 'Endpoint' });
    expect(input).toHaveAttribute('value', ENDPOINT);
  });
});
