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
         <button id="${data[i].name}" class="box"  >
         <p class= "numberBox">N° ${data[i].num}</p>
         <p> <img  class="picture" src=" ${data[i].img}"> </p>
        </button>
        <p class="card-title"> ${
          data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1)
        } </p>
    </div>  
    
    
    <div class="containerModal"  id="${data[i].name}">
      <div class="modalInside">
       <button class="close" id="x"> <img src="data/imagenes/icons8xbox.png" /></button>
        <p class= "numberModal">N°${data[i].num}</p>
        <div class="imgContainer"><img  class="pictureModal" src=" ${
          data[i].img
        }"> </div>
        <div class="textPicture">
        <h2 class="nameModal"> ${
          data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1)
        } <img class="miniPokeball" src="data/imagenes/icons8pokeball.png" /> </h2>
        <table class="sizeTy">
           <tr>
           <hr/>
            <th>Types</th> 
            <th>Heigth</th>
            <th>Weigth</th>
           </tr>
           <tr>
            <td>${data[i].type.join(" <br> ")}</td> 
            <td>${data[i].size.height}</td>
            <td>${data[i].size.weight}</td>
           </tr>
          </table>
         <div>
         <hr>
          <p class="titles">Description:</p>
          <p class="aboutModal"> ${data[i].about} </p>
          <p class="resistantModal"> <strong>Resistant:</strong> ${data[
            i
          ].resistant.join(" - ")} </p>
          <p class="weaknessesModal"> <strong>Weaknesses:</strong> ${data[
            i
          ].weaknesses.join(" - ")} </p>
          </div>
          <table class="tableModal">
           <tr>
            <th class="stables">Base-attack</th> 
            <th class="stables">Base-defense</th>
            <th class="stables">Base-stamina</th>
           </tr>
           <tr>
            <td class="typesS">${data[i].stats["base-attack"]}</td> 
            <td class="typesS">${data[i].stats["base-defense"]}</td>
            <td class="typesS">${data[i].stats["base-stamina"]}</td>
           </tr>
          </table>
        
       </div>

      </div>
    </div>
     `;
  }
  callPokeContainer.innerHTML = listPoke;
};
//Funcion que despliega el modal
function addEvents() {
  const btnBoxes = document.querySelectorAll(".box");
  btnBoxes.forEach((element)=>{
    const currentId = element.getAttribute("id")
    element.addEventListener("click", ()=>{
      const modal = document.querySelector(`.containerModal#${currentId}`)
      modal.style.display="block"
    })

  })
}


pokeList(dataPokemon);
addEvents();


//Funcion de filter
let opcionElement = document.getElementById("typePokemon");
opcionElement.addEventListener("change", (event) => {
  callPokeContainer.innerHTML = "";
  const choseElement = filterData(dataPokemon, event.target.value);

  pokeList(choseElement);
  addEvents();
});

//Funcion sort
let selectorByOrder = document.getElementById("selectOrder");
selectorByOrder.addEventListener("change", () => {
  callPokeContainer.innerHTML = "";
  const callPokeOrder = pokemonOrder(dataPokemon, selectorByOrder.value);

  pokeList(callPokeOrder);
  addEvents();
});

//Funcion buscar por id
let searchIdOrNumber = document.getElementById("inputPokemon");
searchIdOrNumber.addEventListener("keyup", () => {
  let convertingToMin = searchIdOrNumber.value.toLowerCase();
  callPokeContainer.innerHTML = "";
  const inputIdPokemon = searchId(dataPokemon, convertingToMin);

  pokeList(inputIdPokemon);
  addEvents();
});
