import { useContext } from "react";
import styles from "./Footer.module.css";
import { GalleryContext } from "../GalleryContext";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const { dispatch, currentPictureIndex, galleryPictures } =
    useContext(GalleryContext);
  const isFirstPicture = currentPictureIndex === 0;
  const isLastPicture = currentPictureIndex === galleryPictures.length - 1;
  const currentPicture = galleryPictures[currentPictureIndex];
  function nextPicture() {
    dispatch({
      type: "select-picture",
      payload: {
        pictureIndex: currentPictureIndex + 1,
      },
    });
    navigate(`/slideshow/${galleryPictures[currentPictureIndex + 1].name}`);
  }
  function prevPicture() {
    dispatch({
      type: "select-picture",
      payload: {
        pictureIndex: currentPictureIndex - 1,
      },
    });
    navigate(`/slideshow/${galleryPictures[currentPictureIndex + 1].name}`);
  }
  return (
    <footer className={styles.footer}>
      <label hidden htmlFor="progress">
        Progress
      </label>
      <progress
        id="progress"
        value={currentPictureIndex + 1}
        max={galleryPictures.length}
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
