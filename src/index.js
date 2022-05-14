import "@babel/polyfill";
import "regenerator-runtime/runtime";

import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";

// components
import { App } from './App'
// styles
import  './fonts.css'
import './index.scss'
import 'normalize.css';



ReactDOM.render(
  <StrictMode>
            <HashRouter>
                <App />
            </HashRouter>
  </StrictMode>, document.getElementById('root')
)
