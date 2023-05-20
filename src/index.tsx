import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App-Router';
import {Provider} from "react-redux";
import AppReduxStore from "./redux-store/AppReduxStore";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
    <Provider store={AppReduxStore}>
    <CssBaseline />
    <App />
  </Provider>
);
