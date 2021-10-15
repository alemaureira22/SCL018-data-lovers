
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
  const datapoke = pokemons;
  const orderByInicial = datapoke.sort((prev, next) => {
    if (prev.name > next.name) {
      return 1;
    }
    if (prev.name < next.name) {
      return -1;
    }
    return 0;
  });

  if (order === "descendente") {
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
