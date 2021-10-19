import data from "./data/pokemon/pokemon.js";

import { filterData } from "./data.js";
import { pokemonOrder } from "./data.js";
import { searchId } from "./data.js";

const dataPokemon = Object.values(data.pokemon);


//variable que contiene el div en html
const callPokeContainer = document.getElementById("pokemonContainer");

//Impresion de Pantilla para mostrar todos los pokemons
const pokeList = (data) => {
  let listPoke = "";
  for (let i = 0; i < data.length; i++) {
    listPoke += ` 
    <div class="pokemonBox">
         <div class="box" >
         <p class= "numberBox">N° ${data[i].num}</p>
         <p> <img  class="picture" src=" ${data[i].img}"> </p>
        </div>
        <p class="card-title"> ${data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1)} </p>
    </div>      
     `;
  }
  callPokeContainer.innerHTML = listPoke;
};

pokeList(dataPokemon);

//Funcion de filter
let opcionElement = document.getElementById("typePokemon");
opcionElement.addEventListener("change", (event) => {
  callPokeContainer.innerHTML = "";
  const choseElement = filterData(dataPokemon, event.target.value);

  pokeList(choseElement);
});

//Funcion sort
let selectorByOrder = document.getElementById("selectOrder");
selectorByOrder.addEventListener("change", () => {
  callPokeContainer.innerHTML = "";
  const callPokeOrder = pokemonOrder(dataPokemon, selectorByOrder.value);

  pokeList(callPokeOrder);
});

//Funcion buscar por id
let searchIdOrNumber = document.getElementById("inputPokemon");
searchIdOrNumber.addEventListener("keyup", () => {
  let convertingToMin = searchIdOrNumber.value.toLowerCase();
  callPokeContainer.innerHTML = "";
  const inputIdPokemon = searchId(dataPokemon, convertingToMin);

  pokeList(inputIdPokemon);
});
