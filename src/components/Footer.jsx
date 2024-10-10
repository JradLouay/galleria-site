import { useNavigate, useParams } from "react-router-dom";
import styles from "./Footer.module.css";
import {
  getPaintingByName,
  getNextAndPreviousPainting,
  getGallerySize,
} from "../utils";

function Footer() {
  const params = useParams();
  const navigate = useNavigate();
  if (!("paintingName" in params)) {
    return null;
  }
  const currentPicture = getPaintingByName(params.paintingName);
  const currentPaintingIndex = Number(params.paintingIndex);
  const { nextPaintingName, previousPaintingName } =
    getNextAndPreviousPainting(currentPaintingIndex);
  const isFirstPicture = currentPaintingIndex === 0;
  const isLastPicture = currentPaintingIndex === getGallerySize() - 1;

  function nextPicture() {
    navigate(`/slideshow/${currentPaintingIndex + 1}/${nextPaintingName}`);
  }
  function prevPicture() {
    navigate(`/slideshow/${currentPaintingIndex - 1}/${previousPaintingName}`);
  }

  return (
    <footer className={styles.footer}>
      <label hidden htmlFor="progress">
        Progress
      </label>
      <progress
        id="progress"
        value={currentPaintingIndex + 1}
        max={getGallerySize()}
      ></progress>
      <div className={styles["painting-info"]}>
        <p className={`heading3 ${styles["painting-name"]}`}>
          {currentPicture.name}
        </p>
        <p className={`subhead2 ${styles["painting-author"]}`}>
          {currentPicture.artist.name}
        </p>
      </div>
      <div className={styles["action-area"]}>
        <button disabled={isFirstPicture} onClick={prevPicture}>
          <img src="/assets/shared/icon-back-button.svg" />
        </button>
        <button disabled={isLastPicture} onClick={nextPicture}>
          <img src="/assets/shared/icon-next-button.svg" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
