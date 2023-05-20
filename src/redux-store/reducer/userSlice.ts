import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    email: ""
}


export const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        setUser:(state:any, action) => {
            state.email = action.payload
        }
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer



