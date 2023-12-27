import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import FallbackUI from './FallbackUI';

describe('FallbackUI', () => {
  beforeEach(() => {
    render(<FallbackUI />);
  });

  test('has button to refresh page', () => {
    expect(screen.getByText('Refresh')).toBeInTheDocument();
  });

  test('refreshes the page after click', async () => {
    const reloadMock = vi.fn();
    Object.defineProperty(window, 'location', {
      value: { reload: reloadMock },
    });
    const refreshPage = screen.getByText('Refresh');
    await userEvent.click(refreshPage);

    expect(reloadMock).toHaveBeenCalled();
  });
});
