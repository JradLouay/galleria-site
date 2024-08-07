import "./App.css";
import { GalleryContextProvider } from "./GalleryContext";
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
          path: "slideshow",
          element: <PaintingDetail />,
        },
        {
          path: "",
          element: <Gallery />,
        },
      ],
    },
  ]);
  return (
    <GalleryContextProvider>
      <RouterProvider router={router} />
    </GalleryContextProvider>
  );
}

export default App;
