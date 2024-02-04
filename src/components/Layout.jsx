import Footer from "./Footer";
import Gallery from "./Gallery/Gallery";
import Header from "./Header";
import styles from "./Layout.module.css";
import PaintingDetail from "./detail/PaintingDetail";
function Layout() {
  const presentationMode = true;
  return (
    <>
      <Header />
      <main className={styles.layout}>
        {!presentationMode ? (
          <Gallery />
        ) : (
          <>
            <PaintingDetail />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
