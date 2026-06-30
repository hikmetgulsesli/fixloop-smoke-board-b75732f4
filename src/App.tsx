import { useEffect, useMemo } from 'react';
import { StatusUtilityFixloopSmokeBoard } from './screens';
import type { StatusUtilityFixloopSmokeBoardProps } from './screens';
import {
  FixloopSmokeBoardProvider,
  useFixloopSmokeBoardActions,
  useFixloopSmokeBoardState,
} from './features/fixloop-smoke-board/fixloop-smoke-board.store';
import type { FixloopSmokeBoardActions, FixloopSmokeBoardState } from './features/fixloop-smoke-board/fixloop-smoke-board.types';

declare global {
  interface Window {
    app?: { state: FixloopSmokeBoardState; actions: FixloopSmokeBoardActions };
  }
}

function SmokeBoardScreen() {
  const actions = useFixloopSmokeBoardActions();
  const state = useFixloopSmokeBoardState();

  useEffect(() => {
    window.app = { state, actions };
  }, [state, actions]);

  const screenActions: StatusUtilityFixloopSmokeBoardProps['actions'] = useMemo(
    () => ({
      'refresh-1': actions.refreshStatus,
      'refresh-status-3': actions.refreshStatus,
      'settings-2': actions.toggleReadyMode,
    }),
    [actions],
  );

  return (
    <div
      data-setfarm-root="fixloop-smoke-board"
      data-testid="setfarm-app-root"
      className="relative min-h-screen w-full overflow-hidden bg-slate-50 text-slate-950"
    >
      <StatusUtilityFixloopSmokeBoard actions={screenActions} />
      <span data-testid="last-refreshed-at" className="sr-only">
        {state.preference.lastRefreshedAt}
      </span>
      <span data-testid="ready-mode" className="sr-only">
        {state.preference.readyMode ? 'ready' : 'paused'}
      </span>
    </div>
  );
}

export default function App() {
  return (
    <FixloopSmokeBoardProvider>
      <SmokeBoardScreen />
    </FixloopSmokeBoardProvider>
  );
}
