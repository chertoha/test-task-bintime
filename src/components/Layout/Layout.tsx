import { Suspense } from "react";
import { Box } from "@mui/joy";
import Footer from "components/Footer";
import Header from "components/Header";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        <Suspense>
          <Outlet />
        </Suspense>
      </Box>

      <Box boxShadow="0px -2px 4px 0px rgba(223, 223, 223, 0.25);" py={1}>
        <Footer />
      </Box>
    </Box>
  );
};
export default Layout;
