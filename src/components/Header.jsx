import { useContext } from "react";
import { GalleryContext } from "../GalleryContext";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";
import paintings from "../assets/data.json";
function Header() {
  const navigate = useNavigate();
  const { currentPictureIndex } = useContext(GalleryContext);
  const isPictureSelected = typeof currentPictureIndex === "number";
  function action() {
    if (isPictureSelected) {
      navigate("/");
    } else {
      navigate(`/slideshow/${paintings[0].name}`);
    }
  }
  return (
    <header className={styles.header}>
      <img
        src="/assets/shared/logo.svg"
        alt="galleria logo"
        className={styles.logo}
      />
      <button
        onClick={action}
        type="button"
        className={`link1 ${styles.button}`}
      >
        {!isPictureSelected ? "start slideshow" : "stop slideshow"}
      </button>
    </header>
  );
}

export default Header;
