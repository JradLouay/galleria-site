import styles from "./header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <img
        src="/assets/shared/logo.svg"
        alt="galleria logo"
        className={styles.logo}
      />
      <button type="button" className={`link1 ${styles.button}`}>
        start slideshow
      </button>
    </header>
  );
}

export default Header;
