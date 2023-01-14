import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import BlurProvider from './contexts/BlurProvider';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BlurProvider>
            <App />
        </BlurProvider>
    </React.StrictMode>
);