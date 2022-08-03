import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import './index.scss'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement )
root.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
)