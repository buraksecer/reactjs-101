import {UserInfoInterface} from "../../interface/redux-state/UserStateInterface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: UserInfoInterface = {
    email:'burak.secer@gmail.com'
}


export const userSlide= createSlice({
    name: 'user',
    initialState,
    reducers:{
        setUserAction:(state: UserInfoInterface,action: PayloadAction<UserInfoInterface>)=> {
            state.email = action.payload.email
        }
    }
})

export const {
    setUserAction
} = userSlide.actions

export default userSlide.reducer