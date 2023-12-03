import { Box } from "@mui/joy";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <ClipLoader color="#000000" />
    </Box>
  );
};

export default Loader;
