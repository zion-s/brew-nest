import React from 'react';
import About from './About';
import Shop from './Shop';
import Nav from './Nav';
import Item from './itemDetail';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = ()=>{
  return(
  <div className="homepage">
    <p>All your tipsy trivia in one place</p>
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
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={Item} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
