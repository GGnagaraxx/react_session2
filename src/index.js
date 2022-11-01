require('file-loader?name=[name].[ext]!./index.html');      // Connects to the index.html

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//styles
import './styles/index.css'
import './styles/employees.css'
import './styles/car.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);