import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    loggedIn: boolean;
    user: string | undefined | null;
    loading: boolean;
}

const initialState: AuthState = {
    loggedIn: false,
    user: null,
    loading: true,
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => ({
            ...state,
            loggedIn: true,
            user: action.payload,
        }),
        logout: (state) => ({
            ...state,
            loggedIn: false,
            user: null
        }),
    }
})

export const { login, logout } = auth.actions;
export default auth.reducer;