import React from 'react';
import './HeroSimplified.css';

function HeroSimplified ({ name, imgUrl, powerstats }) {  
  return (
    <div className="featured__hero">
      <h2>{name}</h2>
      <img className="featured__hero__img" src={imgUrl} alt={`${name}`} />
      <div className="featured__hero__stats">
        <div>
          <img className='featured__hero__stats__icon' alt="" />
          <p>{powerstats.combat}</p>
        </div>
        <div>
          <img className='featured__hero__stats__icon' alt="" />
          <p>{powerstats.durability}</p>
        </div>
        <div>
          <img className='featured__hero__stats__icon' alt="" />
          <p>{powerstats.intelligence}</p>
        </div>
        <div>
          <img className='featured__hero__stats__icon' alt="" />
          <p>{powerstats.speed}</p>
        </div>
        <div>
          <img className='featured__hero__stats__icon' alt="" />
          <p>{powerstats.strength}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSimplified;