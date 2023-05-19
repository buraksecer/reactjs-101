import * as actionTypes from "./actionTypes"

export function addUser(user: IUser) {
    const action: UserAction = {
        type: actionTypes.ADD_USER,
        user,
    }

    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}

export function removeUser(user: IUser) {
    const action: UserAction = {
        type: actionTypes.REMOVE_USER,
        user,
    }
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}