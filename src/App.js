import React from 'react';
import About from './About';
import Shop from './Shop';
import Nav from './Nav';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = ()=>{
  return(
  <div>
    <h1>Home Page</h1>
  </div>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
