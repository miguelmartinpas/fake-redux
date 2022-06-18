import { createSlice } from '@reduxjs/toolkit'
import { getUser } from '../../../mocks/mocks'
import { UserState } from '../../../type/AppStore'

// Define the initial state using that type
const initialState: UserState = {
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state: UserState) => {
        state.user = getUser(true);
    },
    signOut: (state: UserState) => {
      state.user = null;
  },
  },
})

export const { signIn, signOut } = authSlice.actions
