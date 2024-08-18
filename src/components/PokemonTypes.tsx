import { Chip, Stack } from "@mui/material";
import { PokemonType } from "../models/pokemon-model";
import { TYPES_COLORS } from "../utils/constants";

type PokemonTypeProps = {
  types: PokemonType[];
};

const PokemonTypes = ({ types }: PokemonTypeProps) => {
  return (
    <Stack direction={"row"} spacing={1} justifyContent={"center"}>
      {types.map(({ type }) => (
        <Chip
          key={type.name}
          label={type.name.toUpperCase()}
          sx={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: TYPES_COLORS[type.name],
          }}
          // color={TYPES_COLORS[type.name]}
        />
      ))}
    </Stack>
  );
};

export default PokemonTypes;
