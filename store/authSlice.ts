import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PortalAccess = {
  role: string;
  is_active: boolean;
  email_verified: boolean;
};

export type User = {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  sex: string;
  is_active: boolean;
  email_verified: boolean;
  date_joined: string;
  last_login: string | null;
  role_name: string;
  portal_access: PortalAccess;
  dashboard_url?: string;
};

export type AuthState = {
  user?: User | null;
  access?: string | null;
  refresh?: string | null;
  message?: string | null;
  selectedProgram?: { slug: string; title: string } | null;
};

const initialState: AuthState = {
  user: null,
  access: null,
  refresh: null,
  message: null,
  selectedProgram: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<Partial<AuthState>>) {
      const payload = action.payload;
      if (payload.user !== undefined) state.user = payload.user as User | null;
      if (payload.access !== undefined) state.access = payload.access as string | null;
      if (payload.refresh !== undefined) state.refresh = payload.refresh as string | null;
      if (payload.message !== undefined) state.message = payload.message as string | null;
      if (payload.selectedProgram !== undefined) state.selectedProgram = payload.selectedProgram as { slug: string; title: string } | null;
    },
    setSelectedProgram(state, action: PayloadAction<{ slug: string; title: string } | null>) {
      state.selectedProgram = action.payload;
    },
    clearAuth(state) {
      state.user = null;
      state.access = null;
      state.refresh = null;
      state.message = null;
      state.selectedProgram = null;
    },
  },
});

export const { setAuth, clearAuth, setSelectedProgram } = authSlice.actions;
export default authSlice.reducer;
