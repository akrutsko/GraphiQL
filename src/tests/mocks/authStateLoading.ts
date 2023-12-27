import type { AuthStateHook } from 'react-firebase-hooks/auth';

export const loadingState: AuthStateHook = [null, true, undefined];
export const notLoadingState: AuthStateHook = [null, false, undefined];
