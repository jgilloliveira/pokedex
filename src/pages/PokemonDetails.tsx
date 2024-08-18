import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pokemon } from "../models/pokemon-model";
import { Box, Stack, Typography } from "@mui/material";
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

type PokemonDetailsParams = {
  id: string;
};

const PokemonDetails = () => {
  const { id: pokemonId } = useParams<PokemonDetailsParams>(); // to call API
  const pokemonList = useSelector((state: RootState) => state.pokemon.list);
  // const dispatch = useDispatch();

  const [pokemon, setPokemon] = useState<Pokemon>();

  const getPokemon = async () => {
    try {
      if (pokemonId) {
        const storePokemon = pokemonList.find(
          (pokemon) => pokemonId === pokemon.id.toString()
        );
        setPokemon(storePokemon || (await getPokemonDetails(pokemonId)));
      }
    } catch {
      alert("Ocurrió un error al tratar de obstener los ids.");
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <Stack direction={"row"} justifyContent={"space-around"}>
      <Stack alignItems={"flex-start"}>
        <Typography
          fontSize={28}
          fontWeight={"bold"}
        >{`Nro. ${pokemon?.id}`}</Typography>
        <Typography fontSize={36} fontWeight={"bold"}>
          {toCapital(pokemon?.name)}
        </Typography>

        <Stack direction={"row"} sx={{ flex: 1 }} alignItems={"flex-start"}>
          <Box
            component="img"
            src={pokemon?.sprites.front_default}
            sx={{
              minWidth: "400px",
              minHeight: "400px",
              bgcolor: "white",
              // borderRadius: "10% ",
              mr: 3,
            }}
          />
          <Stack alignItems={"flex-start"}>
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
    </Stack>
    // <Stack direction={"row"} justifyContent={"space-around"}>
    //   <Box
    //     component="img"
    //     src={pokemon?.sprites.front_default}
    //     sx={{
    //       minWidth: "400px",
    //       minHeight: "400px",
    //       bgcolor: "white",
    //       borderRadius: "10% ",
    //       mr: 3,
    //     }}
    //   />
    //   <Stack sx={{ flex: 1 }} alignItems={"flex-start"}>
    //     <Typography
    //       fontSize={28}
    //       fontWeight={"bold"}
    //     >{`Nro. ${pokemon?.id}`}</Typography>
    //     <Typography fontSize={36} fontWeight={"bold"}>
    //       {`Nombre: ${toCapital(pokemon?.name)}`}
    //     </Typography>
    //     <Stack direction={"row"} alignItems={"center"} spacing={1}>
    //       <Typography fontSize={36} fontWeight={"bold"}>
    //         Tipo:
    //       </Typography>
    //       <PokemonTypes types={pokemon?.types || []} />
    //     </Stack>
    //     <Card
    //       sx={{
    //         flex: 1,
    //         width: "100%",
    //         // borderRadius: 3,
    //         justifyContent: "space-around",
    //       }}
    //     >
    //       <CardContent>
    //         <Stack
    //           direction={"row"}
    //           sx={{
    //             justifyContent: "space-around",
    //           }}
    //         >
    //           <Stack>
    //             <Typography fontSize={28} fontWeight={"bold"}>
    //               Altura:
    //             </Typography>
    //             <Typography fontSize={20} color="text.secondary">
    //               {`${decimetresToMeters(pokemon?.height)} m`}
    //             </Typography>
    //           </Stack>
    //           <Stack>
    //             <Typography fontSize={28} fontWeight={"bold"}>
    //               Peso:
    //             </Typography>
    //             <Typography fontSize={20} color="text.secondary">
    //               {`${hectogramsToKilograms(pokemon?.weight)} kg`}
    //             </Typography>
    //           </Stack>
    //         </Stack>
    //       </CardContent>
    //     </Card>
    //   </Stack>
    // </Stack>
  );
};

export default PokemonDetails;
