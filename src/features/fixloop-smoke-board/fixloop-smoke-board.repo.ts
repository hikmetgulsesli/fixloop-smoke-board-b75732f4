import type { Preference, StatusItem } from './fixloop-smoke-board.types';

const STORAGE_KEY_ITEMS = 'fixloop-smoke-board:items';
const STORAGE_KEY_PREFERENCE = 'fixloop-smoke-board:preference';

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage may be unavailable in private mode or when quota is exceeded.
  }
}

export function loadStatusItems(fallback: StatusItem[]): StatusItem[] {
  return readJson<StatusItem[]>(STORAGE_KEY_ITEMS, fallback);
}

export function saveStatusItems(items: StatusItem[]): void {
  writeJson<StatusItem[]>(STORAGE_KEY_ITEMS, items);
}

export function loadPreference(fallback: Preference): Preference {
  return readJson<Preference>(STORAGE_KEY_PREFERENCE, fallback);
}

export function savePreference(preference: Preference): void {
  writeJson<Preference>(STORAGE_KEY_PREFERENCE, preference);
}
