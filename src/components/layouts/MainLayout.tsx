import { Box } from "@mui/material";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return <Box width={"100%"}>{children}</Box>;
};

export default MainLayout;
