import type { Preference, StatusItem } from '../features/fixloop-smoke-board/fixloop-smoke-board.types';

export const defaultStatusItems: StatusItem[] = [
  {
    id: 'loop-1',
    label: 'Smoke Loop A',
    state: 'ready',
    message: 'All checks passing',
    updatedAt: '2026-06-30T09:00:00.000Z',
  },
  {
    id: 'loop-2',
    label: 'Smoke Loop B',
    state: 'warning',
    message: 'Latency elevated',
    updatedAt: '2026-06-30T09:00:00.000Z',
  },
  {
    id: 'loop-3',
    label: 'Smoke Loop C',
    state: 'error',
    message: 'Connection timeout',
    updatedAt: '2026-06-30T09:00:00.000Z',
  },
];

export const defaultPreference: Preference = {
  readyMode: true,
  lastRefreshedAt: '2026-06-30T09:00:00.000Z',
};
