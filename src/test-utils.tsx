import React from 'react';
import { render } from '@testing-library/react';
import { Providers } from './app/providers';

export const renderWithProviders = (ui: React.ReactElement) => {
  return render(<Providers>{ui}</Providers>);
};
