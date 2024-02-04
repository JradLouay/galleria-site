import { useContext } from "react";
import styles from "./PaintingDetail.module.css";
import { GalleryContext } from "../../GalleryContext";

function PaintingDetail() {
  const { galleryPictures, currentPictureIndex } = useContext(GalleryContext);
  const currentPicture = galleryPictures[currentPictureIndex];
  return (
    <section className={styles["detail-section"]}>
      <div className={styles["hero-section"]}>
        <div className={styles.painting}>
          <button className={styles["view-image"]}>
            <span>
              <img src="/assets/shared/icon-view-image.svg" alt="full screen" />
            </span>
            view image
          </button>
          <img
            src={currentPicture.images.hero.large}
            alt={`${currentPicture.artist.name} ${currentPicture.name}`}
          ></img>
        </div>
        <header className={styles.header}>
          <p className={`heading1 ${styles["painting-name"]}`}>
            {currentPicture.name}
          </p>
          <p className={`subhead1 ${styles["painting-author"]}`}>
            {currentPicture.artist.name}
          </p>
        </header>
        <img
          className={styles["author-image"]}
          src={currentPicture.artist.image}
          alt={currentPicture.artist.name}
        ></img>
      </div>
      <div className={styles["description-section"]}>
        <p className={`display ${styles.year}`}>{currentPicture.year}</p>

        <p className={`body ${styles.paragraph}`}>
          {currentPicture.description}
        </p>
        <a
          href={currentPicture.source}
          className={`link2 ${styles.link}`}
          target="_blank"
          rel="noreferrer"
        >
          GO TO SOURCE
        </a>
      </div>
    </section>
  );
}

export default PaintingDetail;
