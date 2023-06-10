import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import NotFound from "../pages/NotFound";
import Linktree from "../pages/Linktree";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/linktree",
    element: (
      <Layout>
        <Linktree />
      </Layout>
    ),
    errorElement: <NotFound />,
  },
]);

export default router;
