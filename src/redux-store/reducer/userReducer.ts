import userSlice from "./userSlice";

const userReducer = () => {
    return {
        user: userSlice,
    }
}

export default userReducer;