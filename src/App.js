import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './compnents/Header';
import Footer from './compnents/Footer';
import Sidebar from './compnents/Sidebar';
import Dashboard from './compnents/Dashboard';
import List from './compnents/List';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Dashboard} />
          <Route path="/beers" component={List} />
          <Sidebar />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
