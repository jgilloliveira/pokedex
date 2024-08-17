import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Pokemon } from "../models/pokemon-model";
import PokemonTypes from "./PokemonTypes";
import { toCapital } from "../utils/text-format";

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Card sx={{ minWidth: "245px", m: 2 }}>
      <CardMedia
        component="img"
        image={pokemon.sprites.front_default}
        height="194"
      />
      <CardContent>
        <Typography fontWeight={"bold"} fontSize={24} color={"#444"} pb={1}>
          {toCapital(pokemon.name)}
        </Typography>
        <PokemonTypes types={pokemon.types} />
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
