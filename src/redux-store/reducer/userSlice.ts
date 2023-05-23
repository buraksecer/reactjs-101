import {UserInfoInterface} from "../../interface/redux-state/UserStateInterface";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: UserInfoInterface = {
   user:{
       email:'burak.secer@gmail.com',
       fullName: null
   }
}


export const userSlide= createSlice({
    name: 'user',
    initialState,
    reducers:{
        setUserAction:(state: UserInfoInterface,action: PayloadAction<UserInfoInterface>)=> {
            state.user = action.payload.user
        }
    }
})

export const {
    setUserAction
} = userSlide.actions

export default userSlide.reducer