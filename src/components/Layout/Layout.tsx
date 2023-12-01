// import { Suspense } from "react";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <>
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
    </>
  );
};
export default Layout;
