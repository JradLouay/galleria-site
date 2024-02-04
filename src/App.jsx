import "./App.css";
import { GalleryContextProvider } from "./GalleryContext";
import Layout from "./components/Layout";

function App() {
  return (
    <GalleryContextProvider>
      <Layout />
    </GalleryContextProvider>
  );
}

export default App;
