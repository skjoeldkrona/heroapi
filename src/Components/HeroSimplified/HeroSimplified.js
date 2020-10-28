import React from 'react';
import * as icon from '../../assets/icons';
import './HeroSimplified.css';

function HeroSimplified ({ name, imgUrl, powerstats }) {  
  return (
    <div className="featured__hero">
      <h2>{name}</h2>
      <img className="featured__hero__img" src={imgUrl} alt={`${name}`} />
      <div className="featured__hero__stats">
        <div>
          <img className="featured__hero__stats__icon" src={icon.combat} alt="icon" />
          <p>{powerstats.combat}</p>
        </div>
        <div>
          <img className="featured__hero__stats__icon" src={icon.durability} alt="icon" />
          <p>{powerstats.durability}</p>
        </div>
        <div>
          <img className="featured__hero__stats__icon" src={icon.intelligence} alt="icon" />
          <p>{powerstats.intelligence}</p>
        </div>
        <div>
          <img className="featured__hero__stats__icon" src={icon.speed} alt="icon" />
          <p>{powerstats.speed}</p>
        </div>
        <div>
          <img className="featured__hero__stats__icon" src={icon.strength} alt="icon" />
          <p>{powerstats.strength}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSimplified;