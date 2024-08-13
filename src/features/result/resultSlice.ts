/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    projects: [],
    coordinations: [],
}

const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        addProject: (state: any, action: any) => {
            state.projects = action.payload
        },
    },
})

export default resultSlice.reducer
// export const {} = resultSlice.actions
