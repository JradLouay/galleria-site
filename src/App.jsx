import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaintingDetail from "./components/detail/PaintingDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Gallery />,
        },
        {
          path: "/slideshow/:paintingIndex/:paintingName",
          element: <PaintingDetail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
