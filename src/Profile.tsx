import { Box } from "@mui/material"
import * as React from "react";
import {useSelector} from "react-redux";



export const Profile = () => {
    const user: IUser = useSelector(
        (state: UserState) => state.user
    )

    console.log("user",user)

    return (
       <>
           {"burak"}
       </>
    )
}
