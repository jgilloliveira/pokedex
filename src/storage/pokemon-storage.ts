import {
  configureStore,
  createSlice,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { Pokemon } from "../models/pokemon-model";
import { getPokemons } from "../api/pokeapi";

export type PokemonState = {
  list: Pokemon[];
  isFetching: boolean;
};

export const fetchPokemons = createAsyncThunk("pokemon/list", () =>
  getPokemons()
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: { list: [], isFetching: false } as PokemonState,
  reducers: {
    // setPokemonList: (state, action: PayloadAction<Pokemon[]>) => {
    //   state.list = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(
        fetchPokemons.fulfilled,
        (state, action: PayloadAction<Pokemon[]>) => {
          state.isFetching = false;
          state.list = action.payload;
        }
      )
      .addCase(fetchPokemons.rejected, (state) => {
        state.isFetching = false;
      });
    // .addCase(fetchPokemonById.pending, (state) => {
    //   state.isFetching = true;
    // })
    // .addCase(fetchPokemonById.fulfilled, (state, action: PayloadAction<string>) => {
    //   state.isFetching = false;
    //   state.selectedItem = action.payload;
    // })
    // .addCase(fetchPokemonById.rejected, (state) => {
    //   state.isFetching = false;
    // });
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
export const selectStatus = (state: RootState) => state.pokemon.isFetching;

// export const { setPokemonList } = pokemonSlice.actions;

// export type AppDispatch = typeof store.dispatch;
