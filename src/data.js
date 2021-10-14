
// estas funciones son de ejemplo

//export const example = () => {
 // return 'example';
//};

//export const anotherExample = () => {
//  return 'OMG';
//};

 export const filterData=(data,searchElement) =>{
  
  const resultFilter= data.filter((pokemon) => pokemon.type.includes(searchElement));
  return resultFilter;
 };

  export const pokemonOrder=(pokemones,order)=>{
    const datapoke=pokemones;
    const orderByInicial= datapoke.sort((prev,next)=>{
    if (prev.name > next.name){
      return 1;
    }if (prev.name < next.name){
      return -1;
    }
    return 0;
   });
   console.log(order);
   if(order==='descendente'){
     return orderByInicial.reverse();
   }
   return orderByInicial;
 };
