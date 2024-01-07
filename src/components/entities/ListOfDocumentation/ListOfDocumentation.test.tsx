import { setupServer } from 'msw/node';
import { beforeAll, afterEach, afterAll, describe, test, expect, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';

import { mockSchema } from '../../../tests/mocks';
import renderWithRouterAndProvider from '../../../tests/utils/renderWithRouter';

import ListOfDocumentation from './ListOfDocumentation';

const handlers = [
  http.post('https://snowtooth.moonhighway.com', () => {
    return HttpResponse.json(mockSchema);
  }),
];

const server = setupServer(...handlers);

describe('ListOfDocumentation', () => {
  beforeEach(async () => {
    await renderWithRouterAndProvider(<ListOfDocumentation />);
  });

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('renders ListOfDocumentation with a successful API call', () => {
    expect(screen.getByText(/Documentation Explorer/i)).toBeInTheDocument();
  });
});
