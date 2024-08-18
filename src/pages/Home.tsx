import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import { Box, Pagination, Stack } from "@mui/material";
import {
  fetchPokemons,
  PokemonDispatch,
  RootState,
  selectPokemons,
  selectTotalPages,
} from "../storage/pokemon-storage";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const pokemons = useSelector((state: RootState) => selectPokemons(state));
  const totalPages = useSelector((state: RootState) => selectTotalPages(state));
  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch<PokemonDispatch>();

  useEffect(() => {
    dispatch(fetchPokemons(page));
  }, [dispatch, page]);

  return (
    <Stack alignItems={"center"}>
      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"center"}>
        {pokemons?.map((pokemon) => (
          <PokemonCard key={pokemon?.name} pokemon={pokemon} />
        ))}
      </Stack>
      <Box m={10} p={1} bgcolor={"white"} borderRadius={"100px"}>
        <Pagination
          size="large"
          page={page}
          count={totalPages}
          onChange={(e, value) => setPage(value)}
        />
      </Box>
    </Stack>
  );
};

export default Home;
