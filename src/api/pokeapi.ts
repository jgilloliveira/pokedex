import { Pokemon, ListResponse } from "../models/pokemon-model";
import { PAGE_LIMIT } from "../utils/constants";
import { api } from "./axios";

export const getPokemons = async (page = 1) => {
  const offset = (page - 1) * PAGE_LIMIT;
  const { data } = await api.get<ListResponse<{ name: string }>>(
    `pokemon/?offset=${offset}`
  );
  const pokemonIdList = data.results;
  return {
    ...data,
    results: await Promise.all(
      pokemonIdList.map(({ name }) => getPokemonDetails(name))
    ),
  };
};

export const getPokemonDetails = async (id: number | string) => {
  const { data } = await api.get<Pokemon>(`pokemon/${id}/`);
  return data;
};
