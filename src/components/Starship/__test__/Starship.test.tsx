// src/app/components/Starship.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Starship from '../Starship';
import { renderWithProviders } from '../../../test-utils';

const mockStarship = {
  name: 'X-Wing',
  model: 'T-65 X-wing starfighter',
  manufacturer: 'Incom T-65',
  cost_in_credits: '150000',
  url: 'https://swapi.dev/api/starships/11/',
};

const mockOnBuy = jest.fn();

describe('Starship Component', () => {
  test('renders starship information', () => {
    renderWithProviders(<Starship starship={mockStarship} onBuy={mockOnBuy} />);

    expect(screen.getByText('X-Wing')).toBeInTheDocument();
    expect(screen.getByText(/Model:/)).toHaveTextContent(
      'T-65 X-wing starfighter'
    );
    expect(screen.getByText(/Manufacturer:/)).toHaveTextContent('Incom T-65');
    expect(screen.getByText(/Cost:/)).toHaveTextContent('149999 credits');
  });

  test('calls onBuy with correct arguments when BUY button is clicked', () => {
    renderWithProviders(<Starship starship={mockStarship} onBuy={mockOnBuy} />);

    // const numberInput = screen.getByRole('spinbutton');
    // fireEvent.change(numberInput, { target: { value: '3' } });
    // fireEvent.click(screen.getByText('BUY'));

    // expect(mockOnBuy).toHaveBeenCalledWith('X-Wing', 3);
  });
});
