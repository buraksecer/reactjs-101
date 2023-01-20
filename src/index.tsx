import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App-Router';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <>
    <CssBaseline />
    <App />
  </>
);
