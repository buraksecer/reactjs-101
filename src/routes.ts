import SignInSide from "./SignIn";
import SingUp from "./SignUp"

// other
import {FC} from "react";
import {Dashboard} from "./Dashboard";
import {Profile} from "./Profile";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'login-route',
        title: 'Login',
        path: '/',
        enabled: true,
        component: SignInSide
    },
    {
        key: 'register-route',
        title: 'Register',
        path: '/register',
        enabled: true,
        component: SingUp
    },
    {
        key: 'home',
        title: 'Home',
        path: '/home',
        enabled: true,
        component: Dashboard
    },
    {
        key: 'profile',
        title: 'Profile',
        path: '/profile',
        enabled: true,
        component: Profile
    }
]


