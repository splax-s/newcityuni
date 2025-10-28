import { apiFetch } from './client';
import type { RegisterPayload } from './types';

const REGISTER_PATH = '/api/v1/auth/register/';
const LOGIN_PATH = '/api/v1/auth/login/';

/**
 * Register a new user/account.
 * Note: payload maps 'full_name' from the UI's 'fullname' field.
 */
export async function register(payload: RegisterPayload) {
  return apiFetch(REGISTER_PATH, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

type LoginPayload = { identifier: string; password: string };

/**
 * Login using identifier (email/username) and password.
 * Returns parsed JSON from the API on success, throws on non-2xx.
 */
export async function login(payload: LoginPayload) {
  const res = await apiFetch(LOGIN_PATH, {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  // Persist tokens and user info to localStorage for subsequent requests.
  if (typeof window !== 'undefined' && res) {
    try {
      if (res.access) localStorage.setItem('access', res.access);
      if (res.refresh) localStorage.setItem('refresh', res.refresh);
      if (res.user) localStorage.setItem('user', JSON.stringify(res.user));
    } catch (e) {
      // Ignore storage errors (e.g., quota exceeded) — caller will still get the response
      // and may handle persistence differently.
      console.warn('Could not persist auth tokens to localStorage', e);
    }
  }

  return res;
}
