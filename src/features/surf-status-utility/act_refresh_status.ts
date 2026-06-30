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
  lastRefreshedAt: string,
  dbLatencyMs: number,
): StatusUtilityState {
  return {
    ...state,
    lastRefreshedAt,
    dbLatencyMs,
  };
}
