import React, { useEffect, useState } from 'react';
import { getBasicHeroInfoById } from '../../requests';
import HeroSimplified from '../HeroSimplified/HeroSimplified';
import './HeroesFeatures.css';

const featuredHeroesIds = [69, 370, 620]

function HeroesFeatures () {

    useEffect(() => {
        fetchAndRenderFeaturedHeroes();
    }, []);
    
    const [featuredHeroesList, setFeaturedHeroesList] = useState([]); 
    
    const fetchAndRenderFeaturedHeroes = async () => {
        let heroes = [];
        for (const heroId of featuredHeroesIds) {
        const data = await getBasicHeroInfoById(heroId);
        heroes.push(data); 
        }
        
        setFeaturedHeroesList(heroes);
    }
      

    return (
        <section className="featured">
          {featuredHeroesList.map(({ name, imgUrl, powerstats }) => (
          <HeroSimplified name={name} imgUrl={imgUrl} powerstats={powerstats} />        
          ))}
        </section>
    );
}

export default HeroesFeatures;