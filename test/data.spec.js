import {filterData, pokemonOrder,searchId} from "../src/data.js";
import data from "../src/data/pokemon/pokemon.js";

describe(`filterData`, () => {
  it(`nos muestra en pantalla los pokemons por tipo`, () => {
    expect(filterData(data.pokemon,`grass`)).toHaveLength(24);
  });

  it('returns `a dar click en element debe retornar a todos los pokemones`', () => {
   expect(filterData(data.pokemon,`all`)).toHaveLength(251);
  });
});

describe(`pokemonOrder`, () => {
  it(`ordena los pokemons de la a-z`, () => {
    const order = `upward`;
    const pokemon = pokemonOrder(data.pokemon,order);
   expect(pokemon[0].name).toBe('abra');
 });

  it(`ordena los pokemon de la z-a`, () => {
    const order = `falling`;
    const pokemon = pokemonOrder(data.pokemon,order);
    expect(pokemon[0].name).toBe('zubat');
  });
});

 describe (`searchId`, ()=> {
   it(`filtrar pokemones por nombre `,()=>{
     expect(searchId(data.pokemon,`pik`)).toHaveLength(1);

   });
   describe (`searchId`, ()=> {
    it(`filtrar pokemones por numero `,()=>{
      expect(searchId(data.pokemon,`004`)).toHaveLength(1);
    });
});
});
