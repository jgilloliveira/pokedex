import { Pokemon, PokemonListResponse } from "../models/pokemon-model";
import { api } from "./axios";

export const getPokemons = async () => {
  const { data } = await api.get<PokemonListResponse>("pokemon/");
  const pokemonIdList = data.results;
  return Promise.all(pokemonIdList.map(({ name }) => getPokemonDetails(name)));
};

export const getPokemonDetails = async (id: number | string) => {
  const { data } = await api.get<Pokemon>(`pokemon/${id}/`);
  return data;
};
