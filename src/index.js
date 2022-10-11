import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/styled-engine'
import './globals.css';
import RouterComponent from "./RoutesComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <RouterComponent />
    </StyledEngineProvider>
  </React.StrictMode>
);