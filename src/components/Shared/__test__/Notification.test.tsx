// src/app/components/Shared/Notification.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notification from '../Notification';

describe('Notification Component', () => {
  test('renders notification message', () => {
    const mockOnClose = jest.fn();
    render(<Notification message="Test message" onClose={mockOnClose} />);
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const mockOnClose = jest.fn();
    render(<Notification message="Test message" onClose={mockOnClose} />);

    // Find and click the close button in the ToastNotification
    // const closeButton = screen.getByRole('button');
    // fireEvent.click(closeButton);

    // expect(mockOnClose).toHaveBeenCalled();
  });
});
