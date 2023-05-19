import { Box } from "@mui/material"
import * as React from "react";
import {shallowEqual, useSelector} from "react-redux";
import {getUserState} from "./redux/reducer";



export const Profile = () => {
    const user = useSelector(getUserState)

    return (
       <>
           {user.mail}
       </>
    )
}
