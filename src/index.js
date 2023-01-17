import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import PortalScreenProvider from './contexts/PortalScreenProvider';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <PortalScreenProvider>
                <App />
            </PortalScreenProvider>
        </BrowserRouter>
    </React.StrictMode>
);