interface IUser {
    mail: string
}

type UserState = {
    user: IUser
}

type UserAction = {
    type: string
    user: IUser
}

type DispatchType = (args: UserAction) => UserAction