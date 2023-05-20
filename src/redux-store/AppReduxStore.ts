import {configureStore,combineReducers} from '@reduxjs/toolkit'
import rootReducer from "./reducer/rootReducer";
// @ts-ignore
import {createEpicMiddleware} from "redux-observable";
import {rootEpic} from "./epic/rootEpic";
import userReducer from "./reducer/userReducer";


const rootReducers = combineReducers({
    rootReducer,
    userReducer,
});

const epicMiddleware = createEpicMiddleware();
const AppReduxStore = configureStore({
    reducer: rootReducers,
    middleware: [epicMiddleware]
});
epicMiddleware.run(rootEpic);

export default AppReduxStore;