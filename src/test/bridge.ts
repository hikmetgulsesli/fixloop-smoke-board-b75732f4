import type { Preference, StatusItem } from '../features/fixloop-smoke-board/fixloop-smoke-board.types';

export const LOCAL_STORAGE_KEYS = {
  items: 'fixloop-smoke-board:items',
  preference: 'fixloop-smoke-board:preference',
} as const;

export function seedLocalStorage({
  items,
  preference,
}: {
  items?: StatusItem[];
  preference?: Preference;
} = {}): void {
  if (items !== undefined) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.items, JSON.stringify(items));
  }
  if (preference !== undefined) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.preference, JSON.stringify(preference));
  }
}

export function clearLocalStorage(): void {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.items);
  localStorage.removeItem(LOCAL_STORAGE_KEYS.preference);
}
