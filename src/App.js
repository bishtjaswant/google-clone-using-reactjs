import React from 'react';
import './App.css';
import {  
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import Search from './Components/Search';

function App() {
  return (
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={Search} />
          </Switch>
        </Router>
    );
}

export default App;