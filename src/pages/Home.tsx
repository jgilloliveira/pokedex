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
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const pokemons = useSelector((state: RootState) => selectPokemons(state));
  const totalPages = useSelector((state: RootState) => selectTotalPages(state));
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<number>(
    parseInt(searchParams.get("page") || "1")
  );
  const dispatch = useDispatch<PokemonDispatch>();

  useEffect(() => {
    console.log("searchParams", searchParams);
  }, [searchParams]);

  useEffect(() => {
    dispatch(fetchPokemons(page));
    setSearchParams({ page: page.toString() });
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
          // onChange={(e, value) => setPage(value)}
          onChange={(_, value) => setPage(value)}
        />
      </Box>
    </Stack>
  );
};

export default Home;
