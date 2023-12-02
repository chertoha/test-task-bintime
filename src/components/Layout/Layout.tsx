// import { Suspense } from "react";
import { Box, Grid } from "@mui/joy";
import { Container } from "@mui/system";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <Container>
      <header>---------Header---------</header>
      {/* <Header /> */}
      {/* <Container> */}
      <main>
        {/* <Suspense> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
      {/* </Container> */}

      <footer>---------Footer---------</footer>
    </Container>
  );
};
export default Layout;
