import { apiFetch } from './client';
import type { RegisterPayload } from './types';
import store from '../../store/store';
import { setAuth as setAuthAction, clearAuth as clearAuthAction } from '../../store/authSlice';

const REGISTER_PATH = '/api/v1/auth/register/';
const LOGIN_PATH = '/api/v1/auth/login/';

/**
 * Register a new user/account.
 * Note: payload maps 'full_name' from the UI's 'fullname' field.
 */
export async function register(payload: RegisterPayload) {
  const res = await apiFetch(REGISTER_PATH, {
    method: 'POST',
    body: JSON.stringify(payload),
    skipAuth: true,
  });

  // If the register response contains tokens, persist them. If not,
  // attempt to login immediately using provided credentials (fallback).
  if (typeof window !== 'undefined' && res) {
    try {
      if (res.access) {
        localStorage.setItem('access', res.access);
      }
      if (res.refresh) {
        localStorage.setItem('refresh', res.refresh);
      }
      if (res.user) {
        localStorage.setItem('user', JSON.stringify(res.user));
      }
    } catch (e) {
      console.warn('Could not persist auth tokens to localStorage after register', e);
    }
    // Also update the in-memory/store representation so components can react immediately.
    try {
      store.dispatch(setAuthAction(res));
    } catch (e) {
      console.warn('Failed to dispatch auth set after register', e);
    }
  }

  // If the backend didn't return tokens but we have credentials, auto-login as a convenience.
  // This helps avoid 401 when the next action assumes an authenticated user.
  if ((!res || !res.access) && typeof window !== 'undefined') {
    // Perform a best-effort auto-login using the register payload if it contains email and password
  const p = payload as unknown as Record<string, unknown>;
    const maybeEmail = (p.email ?? p.identifier) as string | undefined;
    const maybePassword = p.password as string | undefined;
    if (maybeEmail && maybePassword) {
      try {
        // Importing login from the same module; call the exported login function.
        const loginRes = await login({ identifier: maybeEmail, password: maybePassword });
        return loginRes;
      } catch {
        // If auto-login fails, ignore and return the original register response.
        // Caller can decide next steps (e.g., prompt user to login).
      }
    }
  }

  return res;
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
    skipAuth: true,
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
    try {
      store.dispatch(setAuthAction(res));
    } catch (e) {
      console.warn('Failed to dispatch auth set after login', e);
    }
  }

  return res;
}

const LOGOUT_PATH = '/api/v1/auth/logout/';

/**
 * Logout the current user. Calls the logout endpoint and clears stored tokens/user.
 */
export async function logout() {
  // Attempt server logout first
  try {
    await apiFetch(LOGOUT_PATH, { method: 'POST' });
  } catch (err) {
    // ignore errors from server logout but proceed to clear local state
    console.warn('Server logout failed', err);
  }

  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      localStorage.removeItem('user');
    } catch (e) {
      console.warn('Failed to clear localStorage during logout', e);
    }
  }

  try {
    store.dispatch(clearAuthAction());
  } catch (e) {
    console.warn('Failed to dispatch auth clear during logout', e);
  }

  return true;
}
