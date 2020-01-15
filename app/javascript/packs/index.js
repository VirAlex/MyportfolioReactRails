import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from "../components/App";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact"


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.body.appendChild(document.createElement('div')),
  )
})
