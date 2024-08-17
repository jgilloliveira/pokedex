import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Pokemon } from "../models/pokemon-model";

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={pokemon.sprites.front_default}
        height="194"
        // width={}
      />
      <CardContent>
        <Typography>{pokemon.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
