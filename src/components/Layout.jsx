import { useContext } from "react";
import { GalleryContext } from "../GalleryContext";
import Footer from "./Footer";
import Gallery from "./Gallery/Gallery";
import Header from "./Header";
import styles from "./Layout.module.css";
import PaintingDetail from "./detail/PaintingDetail";
function Layout() {
  const { currentPictureIndex } = useContext(GalleryContext);
  const isPictureSelected = typeof currentPictureIndex !== "number";
  return (
    <>
      <Header />
      <main className={styles.layout}>
        {isPictureSelected ? <Gallery /> : <PaintingDetail />}
      </main>
      {!isPictureSelected && <Footer />}
    </>
  );
}

export default Layout;
