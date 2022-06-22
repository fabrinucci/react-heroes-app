import { heroes } from "../data/heroes";

export const getHeroByName = (name = '') => {

  console.log('state');

  name = name.toLowerCase()
  
  if( name === '' ) {
    return []
  }

  return heroes.filter( hero => hero.superhero.toLowerCase().includes(name))  

  // return heroes
}