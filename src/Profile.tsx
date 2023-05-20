import * as React from "react";
import { useSelector} from "react-redux";

export function Profile() {

    const user = useSelector((state: any) => state.user);
    console.log("user",user)
    return (
        <div>
            <h1>Profile Page</h1>
        </div>
    )
}

