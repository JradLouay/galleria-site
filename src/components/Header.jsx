import styles from "./header.module.css";
import { useNavigate, useParams } from "react-router-dom";
import paintings from "../assets/data.json";
function Header() {
  const navigate = useNavigate();
  const params = useParams();
  const isPictureSelected = "paintingName" in params;
  function action() {
    if (isPictureSelected) {
      navigate("/");
    } else {
      navigate(`/slideshow/0/${paintings[0].name}`);
    }
  }
  return (
    <header className={styles.header}>
      <a href="/">
        <img
          src="/assets/shared/logo.svg"
          alt="galleria logo"
          className={styles.logo}
        />
      </a>
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
