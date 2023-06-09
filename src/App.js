import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Login from './Login';
function App() {
  return (
    <Router>
    <div className="app">
      <Routes>
      <Route path="/login" element={
          <React.Fragment>
          <Login />
          </React.Fragment>
        } />
      <Route path="/checkout" element={
          <React.Fragment>
              <Header />
            <Checkout />
          </React.Fragment>
        } />
        <Route path="/" element={
          <React.Fragment>
              <Header />
            <Home />
          </React.Fragment>
        } />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
