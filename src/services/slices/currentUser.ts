import { createSlice } from "@reduxjs/toolkit";

const currentUser = createSlice(
    {
    initialState :false,
    name: 'currentUSesr',
    reducers:{
        change: (state)=>!state,
    }
}
)

export const {change} = currentUser.actions
export default currentUser.reducer