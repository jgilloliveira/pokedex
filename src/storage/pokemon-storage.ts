import {
  configureStore,
  createSlice,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { ListResponse, Pokemon } from "../models/pokemon-model";
import { getPokemons } from "../api/pokeapi";
import { PAGE_LIMIT } from "../utils/constants";

export type PokemonState = {
  list: Pokemon[];
  totalPages: number;
  isFetching: boolean;
};

export const fetchPokemons = createAsyncThunk("pokemon/list", (page?: number) =>
  getPokemons(page)
);

const initialState: PokemonState = {
  list: [],
  isFetching: false,
  totalPages: 0,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(
        fetchPokemons.fulfilled,
        (state, action: PayloadAction<ListResponse<Pokemon>>) => {
          state.isFetching = false;
          state.list = action.payload.results;
          state.totalPages = Math.ceil(action.payload.count / PAGE_LIMIT);
        }
      )
      .addCase(fetchPokemons.rejected, (state) => {
        state.isFetching = false;
      });
  },
});

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type PokemonDispatch = typeof store.dispatch;
export const selectPokemons = (state: RootState) => state.pokemon.list;
export const selectTotalPages = (state: RootState) => state.pokemon.totalPages;
export const selectStatus = (state: RootState) => state.pokemon.isFetching;

// export const { setPokemonList } = pokemonSlice.actions;

// export type AppDispatch = typeof store.dispatch;
