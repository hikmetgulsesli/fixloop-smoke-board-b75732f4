import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders an application root', () => {
    render(<App />);
    expect(screen.getByTestId('setfarm-app-root')).toBeInTheDocument();
  });

  it('renders the status utility screen with initial state', () => {
    render(<App />);
    expect(screen.getByText('Current Status')).toBeInTheDocument();
    expect(screen.getByText('Ready')).toBeInTheDocument();
    expect(screen.getByText('99.9%')).toBeInTheDocument();
    expect(screen.getByText('Stable')).toBeInTheDocument();
    expect(screen.getByText('24ms')).toBeInTheDocument();
  });

  it('updates last refreshed timestamp when refresh button is clicked', async () => {
    render(<App />);
    const initialTimestamp = screen.getByTestId('last-refreshed-at').textContent;
    const refreshButton = screen.getByRole('button', { name: /refresh status/i });

    await userEvent.click(refreshButton);

    const updatedTimestamp = screen.getByTestId('last-refreshed-at').textContent;
    expect(updatedTimestamp).not.toBe(initialTimestamp);
  });

  it('toggles ready mode when settings button is clicked', async () => {
    render(<App />);
    const statusLabel = screen.getByText('Ready');
    expect(statusLabel).toBeInTheDocument();

    const settingsButton = screen.getByRole('button', { name: /settings/i });
    await userEvent.click(settingsButton);

    expect(screen.getByText('Paused')).toBeInTheDocument();
    expect(screen.queryByText('Ready')).not.toBeInTheDocument();

    await userEvent.click(settingsButton);

    expect(screen.getByText('Ready')).toBeInTheDocument();
    expect(screen.queryByText('Paused')).not.toBeInTheDocument();
  });
});
