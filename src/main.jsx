import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const baseUrl = import.meta.env.MODE === 'production' ? '/were-cooked-frontend' : '/';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
