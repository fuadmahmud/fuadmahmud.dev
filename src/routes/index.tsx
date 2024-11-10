import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import NotFound from "../pages/NotFound";
import Linktree from "../pages/Linktree";
import Blog from "../pages/Blog";
import DetailBlog from "../pages/Blog/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <DetailBlog />,
      },
    ],
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
