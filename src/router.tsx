// import { lazy } from "react";
import Layout from "components/Layout";
import { lazy } from "react";
// import ArticlePage from "pages/ArticlePage";
// import HomePage from "pages/HomePage";
import { createBrowserRouter } from "react-router-dom";

// const WaybillPage = lazy(() => import("./pages/WaybillPage/WaybillPage"));
// const WarehousePage = lazy(() => import("./pages/WarehousePage/WarehousePage"));

const HomePage = lazy(() => import("./pages/HomePage"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));

export const ROUTES = {
  HOME: "/",
  ARTICLE: "/article",
};

const routes = [
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: `${ROUTES.ARTICLE}`,
        element: <ArticlePage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: "/test-task-bintime",
});

export default router;
