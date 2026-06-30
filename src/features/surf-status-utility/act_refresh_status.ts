export interface StatusUtilityState {
  ready: boolean;
  lastRefreshedAt: string;
  systemHealth: number;
  apiConnectivity: 'Stable' | 'Degraded';
  dbLatencyMs: number;
}

export const initialStatusUtilityState: StatusUtilityState = {
  ready: true,
  lastRefreshedAt: new Date().toISOString(),
  systemHealth: 99.9,
  apiConnectivity: 'Stable',
  dbLatencyMs: 24,
};

export function refreshStatus(
  state: StatusUtilityState,
  lastRefreshedAt: string = new Date().toISOString(),
  dbLatencyMs: number = Math.floor(Math.random() * 50) + 10,
): StatusUtilityState {
  return {
    ...state,
    lastRefreshedAt,
    dbLatencyMs,
  };
}

export function tickStatus(state: StatusUtilityState): StatusUtilityState {
  const now = new Date().toISOString();
  const nextLatency = Math.max(10, Math.min(80, state.dbLatencyMs + Math.floor(Math.random() * 21) - 10));
  const nextHealth = Number(
    Math.max(90, Math.min(100, state.systemHealth + (Math.random() * 2 - 1))).toFixed(1),
  );
  return {
    ...state,
    lastRefreshedAt: now,
    dbLatencyMs: nextLatency,
    systemHealth: nextHealth,
  };
}
