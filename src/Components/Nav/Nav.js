import React, { useState } from 'react';
import logo from "../../assets/img/nav_logo.png";
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav () {
    const [searchInputValue, setSearchInputValue] = useState('');

    return (
        <nav className="nav">
        <div className="container">
            <Link to="/"><img className="nav__logo" src={logo} alt="Superhero Database" /></Link>
            <div className="nav__search">
                <input onChange={event => setSearchInputValue(event.target.value)} value={searchInputValue} type="text" name="search" />
                <Link to={`/search/${searchInputValue}`}><button>Find your hero!</button></Link>
            </div>
        </div>    
        </nav>
    );
}

export default Nav;