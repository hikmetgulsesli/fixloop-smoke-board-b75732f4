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

export function refreshStatus(state: StatusUtilityState): StatusUtilityState {
  return {
    ...state,
    lastRefreshedAt: new Date().toISOString(),
    dbLatencyMs: Math.floor(Math.random() * 50) + 10,
  };
}
