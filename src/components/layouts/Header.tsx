import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import logo from "../../assets/images/pokedex_logo.png";
import SearchIcon from "@mui/icons-material/Search";

type HeadersProps = {
  onSearch: (value: string) => void;
};

const Header = ({ onSearch }: HeadersProps) => {
  return (
    <Stack alignItems={"center"} mb={2}>
      <Box component={"img"} src={logo} alt={"pokédex"} />
      <Stack width={"100%"} alignItems={"flex-start"} spacing={1} px={2}>
        <Typography fontSize={28} fontWeight={"bold"}>
          Search pokémon
        </Typography>
        <TextField
          id="search-bar"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: { borderRadius: "30px", bgcolor: "white" },
          }}
          onChange={({ target }) => onSearch(target.value)}
          fullWidth
        />
      </Stack>
    </Stack>
  );
};

export default Header;
