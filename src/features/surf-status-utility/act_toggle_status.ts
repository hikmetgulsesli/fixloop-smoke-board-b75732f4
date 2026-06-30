import type { StatusUtilityState } from './act_refresh_status';

export function toggleStatus(state: StatusUtilityState): StatusUtilityState {
  return {
    ...state,
    ready: !state.ready,
  };
}
