export type PokemonListResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: { name: string }[];
};

export type Pokemon = {
  name: string;
  types: PokemonType[];
  sprites: PokemonSprite;
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
