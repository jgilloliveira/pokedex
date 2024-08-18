import { useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import { Box, Pagination, Stack } from "@mui/material";
import {
  fetchPokemons,
  PokemonDispatch,
  RootState,
  selectPokemons,
} from "../storage/pokemon-storage";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const pokemons = useSelector((state: RootState) => selectPokemons(state));

  const dispatch = useDispatch<PokemonDispatch>();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <Stack alignItems={"center"}>
      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"}>
        {pokemons?.map((pokemon) => (
          <PokemonCard key={pokemon?.name} pokemon={pokemon} />
        ))}
      </Stack>
      <Box m={10} p={1} bgcolor={"white"} borderRadius={"100px"}>
        <Pagination size="large" count={10} />
      </Box>
    </Stack>
  );
};

export default Home;
