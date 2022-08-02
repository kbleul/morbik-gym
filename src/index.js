import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "./utils/themeContex"
import { LocationProvider } from "./utils/locationContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <LocationProvider>
       <App />
      </LocationProvider>
    </ThemeProvider>
  </BrowserRouter>
);

