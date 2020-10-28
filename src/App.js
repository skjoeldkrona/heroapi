import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HeroesFeatures from './Components/HeroesFeatures/HeroesFeatures';
import SearchView from './Components/SearchView/SearchView';


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
              <Route path="/search/:name">
                <SearchView />
              </Route>
              <Route path="/hero/:id">
              </Route>
            </Switch>
          </div>
        </main>
        <footer>
          <div className="container">
            <p>This content is kindly provided by <a href="https://superheroapi.com/">Superhero API</a></p>
            <p>Blood, sweat and tears by skjoeldkrona with great thanks to Radek.</p>
          </div>
        </footer>
      </Router>
    </>
  );
}  

export default App;