import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <label hidden htmlFor="timer">
        Timer
      </label>
      <progress id="timer" value="32" max={"100"}>
        {" "}
        32%{" "}
      </progress>
      <div className={styles["painting-info"]}>
        <p className={`heading3 ${styles["painting-name"]}`}>Starry Night</p>
        <p className={`subhead2 ${styles["painting-author"]}`}>
          Vincent Van Gogh
        </p>
      </div>
      <div className={styles["action-area"]}>
        <button>
          <img src="/assets/shared/icon-back-button.svg" />
        </button>
        <button>
          <img src="/assets/shared/icon-next-button.svg" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
