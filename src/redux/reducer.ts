import * as actionTypes from "./actionTypes"

const initialState: UserState = {
    user: {
        mail:"burak"
    },
}

const reducer = (
    state: UserState = initialState,
    action: UserAction
): UserState => {

    switch (action.type) {
        case actionTypes.ADD_USER:
            const newUser: IUser = {
                mail: action.user.mail,
            }
            return {
                ...state,
                user: newUser,
            }
        case actionTypes.REMOVE_USER:
            return {
                ...state,
                user: initialState.user,
            }
    }
    return state
}

export default reducer