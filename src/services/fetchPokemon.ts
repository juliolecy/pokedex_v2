import { Pokemon } from "../types/PokemonTypes";

export const fetchPokemon = async (pokemon: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  let response, data: Pokemon | null, error;

  try {
    response = await fetch(url);
    data = await response.json();
    error = false;
  } catch {
    data = null;
    error = true;
  }

  return { response, data, error };
};

export const fetchPokemonList = async (page: number) => {
  const offset = 0;
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`;

  const response = await fetch(url);
  const data = await response.json();

  const promises = data.results.map(
    async (pokemon: { name: string }) => (await fetchPokemon(pokemon.name)).data
  );

  const pokemonList = Promise.all(promises);

  return pokemonList;
};
