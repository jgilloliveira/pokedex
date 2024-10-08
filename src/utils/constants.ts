export const PAGE_LIMIT = 20;

export const ROUTES = {
  HOME: "/",
  POKEMON_DETAILS: (id: number | string) => `/pokemon/${id}`,
};

export const TYPES_COLORS: { [key: string]: string } = {
  steel: "#5fa0b7",
  water: "#2279e1",
  bug: "#8c9b11",
  dragon: "#4a5ad5",
  electric: "#e9b400",
  ghost: "#6a3c6a",
  fire: "#dd2122",
  fairy: "#dd68dd",
  ice: "#3cd6fc",
  fighting: "#f57c00",
  normal: "#949694",
  grass: "#399822",
  psychic: "#dd3a71",
  rock: "#a49e79",
  dark: "#4a3b39",
  ground: "#894b19",
  poison: "#923fcc",
  flying: "#79aedf",
};
