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
            return {
                user: action.user,
            }
        case actionTypes.REMOVE_USER:
            return {
                user: initialState.user,
            }
    }
    return state
}

export const getUserState = (state: UserState) =>
    state.user;

export default reducer