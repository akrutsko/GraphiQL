import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import SettingsContext from '../../../contexts/SettingsContext';

import SettingsModal from './SettingsModal';

describe('Settings Modal', () => {
  beforeEach(() => {
    render(
      <SettingsContext>
        <SettingsModal isOpen={true} handleClose={vi.fn()} />
      </SettingsContext>,
    );
  });
  test('has the change language mode', () => {
    const languageElement = screen.getByText(/language/);
    expect(languageElement).toBeInTheDocument();
  });
  test('has the change theme mode', () => {
    const themeElement = screen.queryByText(/theme/i);
    expect(themeElement).toBeInTheDocument();
  });
  test('is able to change language', async () => {
    const changeLanguageButton = screen.getByText(/ru/i);

    await userEvent.click(changeLanguageButton);

    const settingsElementEn = screen.queryByText(/settings/i);
    expect(settingsElementEn).not.toBeInTheDocument();

    const settingsElementRu = screen.queryByText(/настройки/i);
    expect(settingsElementRu).toBeInTheDocument();
  });
});
