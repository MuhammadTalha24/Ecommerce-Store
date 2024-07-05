import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { Provider } from 'react-redux';
import { store } from './redux/store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
   
  </React.StrictMode>,
)
