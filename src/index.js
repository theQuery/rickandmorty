import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import BlurProvider from './contexts/BlurProvider';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <BlurProvider>
                <App />
            </BlurProvider>
        </BrowserRouter>
    </React.StrictMode>
);