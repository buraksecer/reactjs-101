import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App-Router';
import thunk from "redux-thunk"
import reducer from "./redux/reducer"
import { createStore, applyMiddleware, Store } from "redux"
import {Provider} from "react-redux";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

const store: Store<UserState, UserAction> & {
    dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

root.render(
    <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>
);
