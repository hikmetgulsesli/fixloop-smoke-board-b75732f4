import { useEffect, useMemo, useState } from 'react';
import { StatusUtilityFixloopSmokeBoard } from './screens';
import type { StatusUtilityFixloopSmokeBoardProps } from './screens';
import {
  initialStatusUtilityState,
  refreshStatus,
  tickStatus,
  type StatusUtilityState,
} from './features/surf-status-utility/act_refresh_status';
import { toggleStatus } from './features/surf-status-utility/act_toggle_status';

interface StatusUtilityActions {
  refreshStatus: () => void;
  toggleStatus: () => void;
}

declare global {
  interface Window {
    app?: { state: StatusUtilityState; actions: StatusUtilityActions };
  }
}

function SmokeBoardScreen() {
  const [state, setState] = useState(initialStatusUtilityState);

  const actions = useMemo<StatusUtilityActions>(
    () => ({
      refreshStatus: () => {
        const timestamp = new Date().toISOString();
        const latency = Math.floor(Math.random() * 50) + 10;
        setState((prev) => refreshStatus(prev, timestamp, latency));
      },
      toggleStatus: () => setState((prev) => toggleStatus(prev)),
    }),
    [],
  );

  useEffect(() => {
    window.app = { state, actions };
    return () => {
      delete window.app;
    };
  }, [state, actions]);

  useEffect(() => {
    if (!state.ready) return;
    const handle = setInterval(() => {
      setState((prev) => tickStatus(prev));
    }, 2000);
    return () => clearInterval(handle);
  }, [state.ready]);

  const screenActions: StatusUtilityFixloopSmokeBoardProps['actions'] = useMemo(
    () => ({
      'refresh-1': actions.refreshStatus,
      'refresh-status-3': actions.refreshStatus,
      'settings-2': actions.toggleStatus,
    }),
    [actions],
  );

  return (
    <div
      data-setfarm-root="fixloop-smoke-board"
      data-testid="setfarm-app-root"
      className="relative min-h-screen w-full overflow-hidden bg-slate-50 text-slate-950"
    >
      <StatusUtilityFixloopSmokeBoard
        actions={screenActions}
        ready={state.ready}
        lastRefreshedAt={state.lastRefreshedAt}
        systemHealth={state.systemHealth}
        apiConnectivity={state.apiConnectivity}
        dbLatencyMs={state.dbLatencyMs}
      />
      <span data-testid="last-refreshed-at" className="sr-only">
        {state.lastRefreshedAt}
      </span>
      <span data-testid="ready-mode" className="sr-only">
        {state.ready ? 'ready' : 'paused'}
      </span>
    </div>
  );
}

export default function App() {
  return <SmokeBoardScreen />;
}
