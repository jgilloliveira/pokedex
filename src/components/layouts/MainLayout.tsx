import { Box } from "@mui/material";
import Header from "./Header";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box m={1}>
      <Header />
      {children}
    </Box>
  );
};

export default MainLayout;
