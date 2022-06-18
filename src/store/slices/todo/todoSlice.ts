import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodoState } from '../../../type/AppStore'
import { Task } from '../../../type/Todo'

// Define the initial state using that type
const initialState: TodoState = {
  tasks: [],
  filter: 'all'
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state: TodoState, action: PayloadAction<string>) => {
        state.tasks.push({ task: action.payload, done: false})
    },
    finishTask: (state: TodoState, action: PayloadAction<string>) => {
        state.tasks = state.tasks.map(({task}: Task) => ({ task, done: task === action.payload }))
    },
    updateFilter: (state: TodoState, action: PayloadAction<string>) => {
        state.filter = action.payload
    },
  },
})

export const { addTask, finishTask, updateFilter } = todoSlice.actions

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

// export default counterSlice.reducer