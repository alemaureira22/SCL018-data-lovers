import data from './data/pokemon/pokemon.js';
//esto se debe usar cuando creemos funciones de filtrar
//import { example } from './data.js';


const pokemon= data.pokemon;
console.log ("pokemon",pokemon);

//variable que contiene el div en html
const callPokeContainer = document.getElementById("pokemonContainer");

const listPokemon = (pokemon) => {
  return `
   <div class="pokemonBox">
         <div class="box" >
         <p class= "numberBox">N° ${pokemon.num}</p>
         <p> <img  class="picture" src=" ${pokemon.img}"> </p>
         </div>
         <p class="card-title"> ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} </p>
   </div>      
      `;
    };

  for (let i=0; i < pokemon.length; i++){
    callPokeContainer.innerHTML += listPokemon(pokemon[i]);

}   