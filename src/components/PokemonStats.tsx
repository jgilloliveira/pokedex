import { Stack, Typography } from "@mui/material";
import { PokemonStat } from "../models/pokemon-model";
type PokemonStatsProps = {
  stats: PokemonStat[];
};

const PokemonStats = ({ stats }: PokemonStatsProps) => {
  return (
    <Stack direction={"row"} sx={{ borderRadius: 5 }} flexWrap={"wrap"}>
      {stats.map((stat) => (
        <Stack
          key={stat.stat.name}
          justifyContent={"space-between"}
          sx={{
            width: 100,
          }}
        >
          <Stack height={"100%"} justifyContent={"flex-end"}>
            <Typography
              textAlign={"left"}
              fontSize={12}
              color={"#888"}
              fontWeight={"bold"}
            >
              {stat.stat.name.toUpperCase()}
            </Typography>
          </Stack>

          <Typography textAlign={"left"} fontSize={28}>
            {stat.base_stat}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default PokemonStats;
