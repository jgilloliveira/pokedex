import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pokemon } from "../models/pokemon-model";
import { Box, Link, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../storage/pokemon-storage";
import { getPokemonDetails } from "../api/pokeapi";
import PokemonTypes from "../components/PokemonTypes";
import { toCapital } from "../utils/text-format";
import {
  decimetresToMeters,
  hectogramsToKilograms,
} from "../utils/number-format";
import PokemonStats from "../components/PokemonStats";
import MainLayout from "../components/layouts/MainLayout";
import { ROUTES } from "../utils/constants";

type PokemonDetailsParams = {
  id: string;
};

const PokemonDetails = () => {
  const { id: pokemonId } = useParams<PokemonDetailsParams>(); // to call API
  const pokemonList = useSelector((state: RootState) => state.pokemon.list);
  // const dispatch = useDispatch();

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const getPokemon = async () => {
    try {
      if (pokemonId) {
        const storePokemon = pokemonList.find(
          (pokemon) => pokemonId === pokemon.id.toString()
        );
        setPokemon(storePokemon || (await getPokemonDetails(pokemonId)));
      }
    } catch {
      // alert("Ocurrió un error al tratar de obstener los ids.");
      setPokemon(null);
    }
  };

  useEffect(() => {
    getPokemon();
  }, [pokemonId]);

  return (
    <MainLayout>
      {pokemon ? (
        <Stack alignItems={"flex-start"} height={"100%"} px={8}>
          <Stack direction={"row"} spacing={1} mb={2}>
            <Link href={ROUTES.HOME} fontSize={22} underline="hover">
              Home
            </Link>
            <Link href={"#"} fontSize={22} underline="none">
              /
            </Link>
            <Link href={"#"} fontSize={22} underline="hover">
              {toCapital(pokemon?.name)}
            </Link>
          </Stack>

          <Typography fontSize={36} fontWeight={"bold"}>
            {toCapital(pokemon?.name)}
          </Typography>

          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            alignItems={"flex-start"}
            height={"100%"}
          >
            <Box
              component="img"
              src={pokemon?.sprites.front_default}
              sx={{
                minWidth: "300px",
                minHeight: "300px",
                bgcolor: "white",
                borderRadius: "10% ",
                mr: 3,
              }}
            />
            <Stack spacing={3} minWidth="400px" minHeight="400px">
              <Stack alignItems={"flex-start"}>
                <Typography fontSize={28} fontWeight={"bold"}>
                  {`Nro. ${pokemon?.id}`}
                </Typography>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <PokemonTypes types={pokemon?.types || []} />
                </Stack>
              </Stack>
              <Stack direction={"row"} spacing={3}>
                <Stack alignItems={"flex-start"} spacing={1}>
                  <Typography fontSize={22} fontWeight={"bold"}>
                    Altura
                  </Typography>
                  <Typography fontSize={22} fontWeight={"bold"}>
                    Peso
                  </Typography>
                </Stack>
                <Stack alignItems={"flex-end"} spacing={1}>
                  <Typography fontSize={22}>
                    {`${decimetresToMeters(pokemon?.height)}m`}
                  </Typography>
                  <Typography fontSize={22}>
                    {`${hectogramsToKilograms(pokemon?.weight)}kg`}
                  </Typography>
                </Stack>
              </Stack>
              <PokemonStats stats={pokemon?.stats || []} />
            </Stack>
          </Stack>
        </Stack>
      ) : (
        <Typography fontSize={28} fontWeight={"bold"}>
          {"Ups... Este pokémon no fue descubierto todavía"}
        </Typography>
      )}
    </MainLayout>
  );
};

export default PokemonDetails;
