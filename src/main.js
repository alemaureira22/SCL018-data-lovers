import data from './data/pokemon/pokemon.js';
//esto se debe usar cuando creemos funciones de filtrar
import {filterData} from './data.js';
import { pokemonOrder } from './data.js';

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

let opcionElement=document.getElementById("typePokemon");
opcionElement.addEventListener("change", (event)=> {
  const choseElement=filterData(pokemon, event.target.value);
  const print=(type)=>{
    callPokeContainer.innerHTML="";
    for(let i=0; i < type.length;i++){
      callPokeContainer.innerHTML +=listPokemon(type[i]);
    }
  }
  print(choseElement);
});

let selectorByOrder=document.getElementById("selectOrder");
selectorByOrder.addEventListener("change",()=>{
const callPokeOrder=pokemonOrder(pokemon,selectorByOrder.value);
console.log(selectorByOrder.value)
const print=(upward)=>{
  callPokeContainer.innerHTML=""
for(let i=0; i < upward.length;i++){
  callPokeContainer.innerHTML +=listPokemon(upward[i]);
}
}
 print (callPokeOrder);
});
