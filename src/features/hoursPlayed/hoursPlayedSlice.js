import { createSlice } from "@reduxjs/toolkit";

export const hoursPlayedSlice = createSlice({
    name: "hoursPlayed",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            if (state.value -1 >= 0)
                state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = hoursPlayedSlice.actions

export default hoursPlayedSlice.reducer
