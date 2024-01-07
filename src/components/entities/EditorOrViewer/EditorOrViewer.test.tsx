import { describe, expect, test } from 'vitest';
import { screen } from '@testing-library/react';

import renderWithRouterAndProvider from '../../../tests/utils/renderWithRouter';

import EditorOrViewer from './EditorOrViewer';

describe('EditorOrViewer', () => {
  test('renders code tag if readonly', async () => {
    await renderWithRouterAndProvider(<EditorOrViewer readOnly={true} />);
    expect(screen.getByTestId('code-container')).toBeInTheDocument();
  });
  test('renders textarea if not readonly', async () => {
    await renderWithRouterAndProvider(<EditorOrViewer readOnly={false} />);
    expect(screen.getByTestId('text-area')).toBeInTheDocument();
  });
});
