import axios from 'axios';

const ACCESS_TOKEN = 10217943520449533n;

export const getBasicHeroInfoById = async id => {
    const { data: powerstats } = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}/powerstats`);
    const { data: image } = await axios.get(`https://superheroapi.com/api/${ACCESS_TOKEN}/${id}/image`);
    return { imgUrl: image.url, name: powerstats.name, powerstats }
}

