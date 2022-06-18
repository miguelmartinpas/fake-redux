import { configureStore } from '@reduxjs/toolkit'
import { todoSlice } from './slices/todo/todoSlice';
import { authSlice } from './slices/auth/authSlice';


export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    auth: authSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch