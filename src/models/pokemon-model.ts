export type PokemonListResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: { name: string }[];
};

export type Pokemon = {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: PokemonSprite;
  height: number;
  weight: number;
  stats: PokemonStat[];
};

export type PokemonType = {
  slot: number;
  type: {
    name: string;
  };
};

type PokemonSprite = {
  front_default: string;
};

export type PokemonStat = {
  base_stat: string;
  stat: {
    name: string;
  };
};
