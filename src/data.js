
//funcion filtar por tipo
export const filterData = (data, searchElement) => {
  if (searchElement === "all") {
    return data;
  }
  const resultFilter = data.filter((pokemon) =>
    pokemon.type.includes(searchElement)
  );
  return resultFilter;
};

//funcion ordenar de la a-z y z-a
export const pokemonOrder = (pokemons, order) => {
  const orderByInicial =pokemons.sort((a,b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    
  });

  if (order === "falling") {
    return orderByInicial.reverse();
  }
  return orderByInicial;
};

//funcion para buscar por nombre o numero
export const searchId = (pokemons, search) => {
  return pokemons.filter(
    (dataPokemon) =>
      dataPokemon.name.includes(search) || dataPokemon.num.includes(search)
  );
};
