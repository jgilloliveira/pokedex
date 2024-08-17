import { useEffect, useState } from "react";
import { getPokemons } from "../api/pokeapi";
import { Pokemon } from "../models/pokemon-model";
import PokemonCard from "../components/PokemonCard";
import { Stack } from "@mui/material";

const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>();

  const listPokemons = async () => {
    try {
      setPokemons(await getPokemons());
    } catch {
      alert("Ocurrió un error al tratar de obstener los ids.");
    }
  };

  useEffect(() => {
    listPokemons();
  }, []);

  return (
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"}>
      {pokemons?.map((pokemon) => (
        <PokemonCard key={pokemon?.name} pokemon={pokemon} />
      ))}
    </Stack>
  );
};

export default Home;
