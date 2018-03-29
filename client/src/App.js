import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from "./components/Main";

const App = () => 
  <Router>
    <div>
      <Route path="/" componenet={Main} />
    </div>
  </Router>


export default App;
