import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HeroesFeatures from './Components/HeroesFeatures/HeroesFeatures';


function App () {
  return (
    <>
      <Router>
        <Nav />
        <main>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <HeroesFeatures />
              </Route>
              <Route path="">
              </Route>
              <Route path="/hero/:id">
              </Route>
            </Switch>
          </div>
        </main>
        <footer></footer>
      </Router>
    </>
  );
}  

export default App;