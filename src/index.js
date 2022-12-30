import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

//import App from './App';
//import './index.css';
//import reportWebVitals from './reportWebVitals';
import Routers from './routes/routes';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routers/>
  </BrowserRouter>
);

//reportWebVitals();
