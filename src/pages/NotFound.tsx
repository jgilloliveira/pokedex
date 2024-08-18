import { Box, Button, Stack, Typography } from "@mui/material";
import notFound from "../assets/images/404.png";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/constants";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    // <Stack spacing={2}>
    <Stack spacing={3} alignItems={"center"}>
      <Stack>
        <Typography fontSize={40} fontWeight={"bold"}>
          Ups...
        </Typography>
        <Typography fontSize={20} fontWeight={"bold"}>
          No encontramos lo que estás bucando
        </Typography>
      </Stack>
      <Box
        component={"img"}
        src={notFound}
        alt={"404"}
        maxWidth={"80%"}
        borderRadius={"20px"}
      />
      <Button
        variant="contained"
        sx={{
          color: "black",
          textTransform: "none",
          borderRadius: "30px",
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "#EEE",
          },
        }}
        onClick={() => {
          navigate(ROUTES.HOME);
        }}
      >
        Volver al inicio
      </Button>
    </Stack>
  );
};

export default NotFound;
