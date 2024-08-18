import { Stack, Typography } from "@mui/material";
import { PokemonStat } from "../models/pokemon-model";
type PokemonStatsProps = {
  stats: PokemonStat[];
};

const PokemonStats = ({ stats }: PokemonStatsProps) => {
  return (
    <Stack spacing={1} alignItems={"flex-start"}>
      {stats.map((stat) => (
        <Stack direction={"row"}>
          <Typography fontWeight={"bold"}>
            {`${stat.stat.name.toUpperCase()}: `}
          </Typography>
          <Typography>{stat.base_stat}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default PokemonStats;
