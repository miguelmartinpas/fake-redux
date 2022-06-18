import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
    signInWithData: (state: UserState, { payload: { name, avatar } }: PayloadAction<{ name: string, avatar: string }>) => {
      state.user = {
        ...getUser(true),
        name,
        avatar
      }
  },
    signOut: (state: UserState) => {
      state.user = null;
  },
  },
})

export const { signIn, signOut, signInWithData } = authSlice.actions
