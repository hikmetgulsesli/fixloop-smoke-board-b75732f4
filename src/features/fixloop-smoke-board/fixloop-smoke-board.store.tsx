import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type {
  FixloopSmokeBoardActions,
  FixloopSmokeBoardState,
  Preference,
  StatusItem,
} from './fixloop-smoke-board.types';
import { loadPreference, loadStatusItems, savePreference, saveStatusItems } from './fixloop-smoke-board.repo';

export interface FixloopSmokeBoardProviderProps {
  children: React.ReactNode;
  initialItems?: StatusItem[];
  initialPreference?: Preference;
}

const FixloopSmokeBoardStateContext = createContext<FixloopSmokeBoardState | null>(null);
const FixloopSmokeBoardActionsContext = createContext<FixloopSmokeBoardActions | null>(null);

function buildDefaultPreference(): Preference {
  return {
    readyMode: true,
    lastRefreshedAt: new Date().toISOString(),
  };
}

function refreshItems(items: StatusItem[]): StatusItem[] {
  const now = new Date().toISOString();
  return items.map((item) => ({
    ...item,
    updatedAt: now,
  }));
}

export function FixloopSmokeBoardProvider({
  children,
  initialItems,
  initialPreference,
}: FixloopSmokeBoardProviderProps) {
  const [state, setState] = useState<FixloopSmokeBoardState>(() => {
    const preference = initialPreference ?? loadPreference(buildDefaultPreference());
    const items = initialItems ?? loadStatusItems([]);
    return {
      items,
      preference,
      isLoading: false,
      lastError: null,
    };
  });

  const refreshStatus = useCallback(() => {
    setState((prev) => ({
      ...prev,
      items: refreshItems(prev.items),
      preference: {
        ...prev.preference,
        lastRefreshedAt: new Date().toISOString(),
      },
      lastError: null,
    }));
  }, []);

  const toggleReadyMode = useCallback(() => {
    setState((prev) => {
      const nextPreference: Preference = {
        ...prev.preference,
        readyMode: !prev.preference.readyMode,
      };
      return {
        ...prev,
        items: prev.items.map((item) => ({
          ...item,
          state: nextPreference.readyMode ? ('ready' as const) : ('paused' as const),
          updatedAt: new Date().toISOString(),
        })),
        preference: nextPreference,
        lastError: null,
      };
    });
  }, []);

  const dismissError = useCallback(() => {
    setState((prev) => ({ ...prev, lastError: null }));
  }, []);

  const actions = useMemo<FixloopSmokeBoardActions>(
    () => ({
      refreshStatus,
      toggleReadyMode,
      dismissError,
    }),
    [refreshStatus, toggleReadyMode, dismissError],
  );

  useEffect(() => {
    saveStatusItems(state.items);
  }, [state.items]);

  useEffect(() => {
    savePreference(state.preference);
  }, [state.preference]);

  return (
    <FixloopSmokeBoardStateContext.Provider value={state}>
      <FixloopSmokeBoardActionsContext.Provider value={actions}>{children}</FixloopSmokeBoardActionsContext.Provider>
    </FixloopSmokeBoardStateContext.Provider>
  );
}

export function useFixloopSmokeBoardState(): FixloopSmokeBoardState {
  const context = useContext(FixloopSmokeBoardStateContext);
  if (context === null) {
    throw new Error('useFixloopSmokeBoardState must be used within a FixloopSmokeBoardProvider');
  }
  return context;
}

export function useFixloopSmokeBoardActions(): FixloopSmokeBoardActions {
  const context = useContext(FixloopSmokeBoardActionsContext);
  if (context === null) {
    throw new Error('useFixloopSmokeBoardActions must be used within a FixloopSmokeBoardProvider');
  }
  return context;
}
