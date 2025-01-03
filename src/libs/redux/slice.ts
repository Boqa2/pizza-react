import { createSlice } from '@reduxjs/toolkit'

export interface functionState {
  value: number
}

const initialState: functionState = {
  value: 0,
}

const functionSlice = createSlice({
  name: 'function',
  initialState,
  reducers: {
    decrement: (state) => {
        state.value -= 1
      },
  },
})

// Action creators are generated for each case reducer function
export const { decrement } = functionSlice.actions

export const reducer =  functionSlice.reducer