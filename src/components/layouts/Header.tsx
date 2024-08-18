import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import logo from "../../assets/images/pokedex_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<string>("");

  const searchPokemon = () => {
    if (pokemon) navigate(ROUTES.POKEMON_DETAILS(pokemon));
  };

  return (
    <Stack alignItems={"center"} mb={6} mx={6}>
      <Box component={"img"} src={logo} alt={"pokédex"} sx={{ p: 6 }} />
      <TextField
        id="search-bar"
        placeholder="Ingresa el número o nombre de un pokemon "
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={searchPokemon}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          sx: { borderRadius: "30px", bgcolor: "white", width: 524 },
        }}
        onChange={({ target }) => setPokemon(target.value.toLowerCase())}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchPokemon();
          }
        }}
      />
    </Stack>
  );
};

export default Header;
