import { useState, useEffect, createContext } from "react";

export const PokemonContext = createContext();

export const PokemonContextProvider = ({ children }) => {
  const [pokemonId, setPokemonId] = useState({});

  const getrandomId = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const fetchData = async () => {
    const id = getrandomId(1, 905);
    let pokemon = {};
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();

    pokemon = {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      imgPlay: data.sprites.front_default,
      imgCvg: data.sprites.other.dream_world.front_default,
      name: data.name,
      experience: data.base_experience,
      hp: data.stats[0].base_stat,
      atack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      special: data.stats[3].base_stat,
    };
    setPokemonId(pokemon);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <PokemonContext.Provider value={pokemonId}>
      {children}
    </PokemonContext.Provider>
  );
};
