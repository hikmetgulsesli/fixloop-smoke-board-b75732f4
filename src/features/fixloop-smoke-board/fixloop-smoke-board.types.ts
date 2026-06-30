export type StatusItemState = 'ready' | 'paused' | 'warning' | 'error';

export interface StatusItem {
  id: string;
  label: string;
  state: StatusItemState;
  message: string;
  updatedAt: string;
}

export interface Preference {
  readyMode: boolean;
  lastRefreshedAt: string;
}

export interface FixloopSmokeBoardState {
  items: StatusItem[];
  preference: Preference;
  isLoading: boolean;
  lastError: string | null;
}

export interface FixloopSmokeBoardActions {
  refreshStatus: () => void;
  toggleReadyMode: () => void;
  dismissError: () => void;
}
