import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from "../components/App";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact"


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
        <Navbar />
        <Route path="/" component={App} />
        <Route exact path="/about" exact render={() => <About />} />
        <Route exact path="/contact" exact render={() => <Contact />} />
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
