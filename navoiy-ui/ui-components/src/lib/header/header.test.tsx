import { render, screen } from '@testing-library/react';
import { Header } from './header';
import { useLangStore } from '@navoiy-workspace/store';
import { LanguageCode, languageCodes } from '@navoiy-workspace/types';
import { useState } from 'react';

jest.mock('@navoiy-workspace/store', () => ({
  useLangStore: jest.fn(), // Mock Zustand store hook
}));

describe('Header Component', () => {
  const mockSetLanguage = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();

    (useLangStore as unknown as jest.Mock).mockImplementation((selector) => {
      const [language, setLanguage] = useState(LanguageCode.en);

      const store = {
        language,
        setLanguage: (newLanguage: LanguageCode) => {
          setLanguage(newLanguage);
          mockSetLanguage(newLanguage);
        },
      };

      return selector(store);
    });
  });

  it('renders the Header component correctly', () => {
    render(<Header />);

    expect(screen.getByText('Header')).toBeInTheDocument();

    const dropdown = screen.getByRole('combobox');
    expect(dropdown).toBeInTheDocument();

    languageCodes.forEach((lang) => {
      expect(screen.getByRole('option', { name: lang })).toBeInTheDocument();
    });

    expect(screen.getByRole('combobox')).toHaveValue(LanguageCode.en);
  });
});
