import { useContext } from "react";
import { GalleryContext } from "../GalleryContext";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
function Layout() {
  const { currentPictureIndex } = useContext(GalleryContext);
  const isPictureSelected = typeof currentPictureIndex !== "number";
  return (
    <>
      <Header />
      <main className={styles.layout}>
        <Outlet />
      </main>
      {!isPictureSelected && <Footer />}
    </>
  );
}

export default Layout;
