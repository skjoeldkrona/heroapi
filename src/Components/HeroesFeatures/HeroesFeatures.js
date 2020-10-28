import React, { useEffect, useState } from 'react';
import Loader from '../../Loader/Loader';
import { getBasicHeroInfoById } from '../../requests';
import HeroSimplified from '../HeroSimplified/HeroSimplified';
import './HeroesFeatures.css';

const featuredHeroesIds = [69, 370, 620]

function HeroesFeatures () {

    useEffect(() => {
        fetchAndRenderFeaturedHeroes();
    }, []);
    
    const [featuredHeroesList, setFeaturedHeroesList] = useState([]); 
    const [isLoading, setLoadingState] = useState(true); 
    
    const fetchAndRenderFeaturedHeroes = async () => {
        let heroes = [];
        for (const heroId of featuredHeroesIds) {
        const data = await getBasicHeroInfoById(heroId);
        heroes.push(data); 
        }
        
        setFeaturedHeroesList(heroes);
        setLoadingState(false);
    }
      

    return (
        <section className="featured">
            <h1>Featured Heroes</h1>
            { !isLoading && <div className="featured__list">
            {featuredHeroesList.map(({ name, imgUrl, powerstats }) => (
                <HeroSimplified name={name} imgUrl={imgUrl} powerstats={powerstats} />        
            ))} 
            </div>}
            {isLoading && <div className="loader-container">
                <Loader></Loader>
            </div>}
        </section>
    );
}

export default HeroesFeatures;