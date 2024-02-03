import Gallery from "./Gallery.jsx/Gallery";
import Header from "./Header";
import styles from "./Layout.module.css";
import PaintingDetail from "./detail/PaintingDetail";
function Layout() {
  return (
    <>
      <Header />
      <main className={styles.layout}>
        {/* <Gallery /> */}
        <PaintingDetail />
      </main>
    </>
  );
}

export default Layout;
