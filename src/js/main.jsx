import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import ToDo from './components/ToDo';
import ApiTest from './components/ApiTest';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDo />
    {/* <ApiTest /> */}
    

    {/* <Home/> */}
  </React.StrictMode>,
)
