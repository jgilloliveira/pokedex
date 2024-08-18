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
        <Stack alignItems={"flex-start"}>
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

          <Stack direction={"row"} flexWrap={"wrap"} alignItems={"flex-start"}>
            <Box
              component="img"
              src={pokemon?.sprites.front_default}
              sx={{
                minWidth: "400px",
                minHeight: "400px",
                bgcolor: "white",
                borderRadius: "10% ",
                mr: 3,
              }}
            />
            <Stack alignItems={"flex-start"}>
              <Typography fontSize={28} fontWeight={"bold"}>
                {`Nro. ${pokemon?.id}`}
              </Typography>
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <PokemonTypes types={pokemon?.types || []} />
              </Stack>
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Typography fontSize={28} fontWeight={"bold"}>
                  Altura:
                </Typography>
                <Typography fontSize={20}>
                  {`${decimetresToMeters(pokemon?.height)} m`}
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Typography fontSize={28} fontWeight={"bold"}>
                  Peso:
                </Typography>
                <Typography fontSize={20}>
                  {`${hectogramsToKilograms(pokemon?.weight)} kg`}
                </Typography>
              </Stack>
              {/* <Stack direction={"row"} alignItems={"center"} spacing={1}> */}
              <Typography fontSize={28} fontWeight={"bold"}>
                Estadísticas:
              </Typography>
              <PokemonStats stats={pokemon?.stats || []} />
              {/* </Stack> */}
            </Stack>
          </Stack>
        </Stack>
      ) : (
        <Typography fontSize={28} fontWeight={"bold"}>
          {"Ups... Este pokémon todavía no existe!"}
        </Typography>
      )}
    </MainLayout>
  );
};

export default PokemonDetails;
