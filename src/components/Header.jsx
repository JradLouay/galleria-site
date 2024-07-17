import { useContext } from "react";
import { GalleryContext } from "../GalleryContext";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const { dispatch, currentPictureIndex } = useContext(GalleryContext);
  const isPictureSelected = typeof currentPictureIndex !== "number";
  function action() {
    if (!isPictureSelected) {
      dispatch({
        type: "end-slide-show",
      });
      navigate("/");
    } else {
      dispatch({
        type: "start-slide-show",
      });
      navigate("/slideshow");
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
        {isPictureSelected ? "start slideshow" : "stop slideshow"}
      </button>
    </header>
  );
}

export default Header;
