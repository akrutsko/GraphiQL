import { setupServer } from 'msw/node';
import { beforeAll, afterEach, afterAll, describe, test } from 'vitest';
import { screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';

import { mockSchema } from '../../../tests/mocks';
import renderWithRouterAndProvider from '../../../tests/utils/renderWithRouter';

import ListOfDocumentation from './ListOfDocumentation';

const server = setupServer(
  http.post('https://rest-endpoint', () => {
    return HttpResponse.json(mockSchema);
  }),
);

describe('s', () => {
  beforeAll(() => {
    renderWithRouterAndProvider(<ListOfDocumentation />);
    server.listen();
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('renders ListOfDocumentation with a successful API call', async () => {
    await screen.debug();
  });
});
