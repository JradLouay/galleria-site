import styles from "./PaintingDetail.module.css";

function PaintingDetail() {
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
          <img src="./assets/the-sleeping-gypsy/hero-large.jpg"></img>
        </div>
        <header className={styles.header}>
          <p className={`heading1 ${styles["painting-name"]}`}>
            The Sleeping Gypsy
          </p>
          <p className={`subhead1 ${styles["painting-author"]}`}>
            Henri Rousseau
          </p>
        </header>
        <img
          className={styles["author-image"]}
          src="./assets/the-sleeping-gypsy/artist.jpg"
        ></img>
      </div>
      <div className={styles["desciption-section"]}>
        <p className={`display ${styles.year}`}>1889</p>

        <p className={`body ${styles.paragraph}`}>
          Although The Starry Night was painted during the day in Van Goghs
          ground-floor studio, it would be inaccurate to state that the picture
          was painted from memory. The view has been identified as the one from
          his bedroom window, facing east, a view which Van Gogh painted
          variations of no fewer than twenty-one times, including The Starry
          Night. Through the iron-barred window, he wrote to his brother, Theo,
          around 23 May 1889, I can see an enclosed square of wheat ... above
          which, in the morning, I watch the sun rise in all its glory.
        </p>

        <div
          className="link2"
          style={{
            color: "black",
            textAlign: "left",
          }}
        >
          GO TO SOURCE
        </div>
      </div>
    </section>
  );
}

export default PaintingDetail;
