import { Box } from "@mui/joy";
import { ReactComponent as Logo } from "images/logo.svg";

const Header = () => {
  return (
    <Box bgcolor="#1A232E" py={2} textAlign="center">
      <Logo fill="#FFFFFF" />
    </Box>
  );
};

export default Header;
