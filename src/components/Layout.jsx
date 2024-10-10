import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.css";
import { Outlet, ScrollRestoration } from "react-router-dom";
function Layout() {
  return (
    <>
      <Header />
      <main className={styles.layout}>
        <Outlet />
        <ScrollRestoration />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
