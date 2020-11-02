import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/'>
          <Header/>
          <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
