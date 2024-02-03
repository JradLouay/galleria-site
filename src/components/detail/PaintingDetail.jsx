import styles from "./PaintingDetail.module.css";

function PaintingDetail() {
  return (
    <div className={styles["detail-container"]}>
      <div className={styles["hero-section"]}>
        <div className={styles.painting}>
          <img src="./assets/the-sleeping-gypsy/hero-large.jpg"></img>
        </div>
        <div
          style={{
            paddingLeft: "65px",
            paddingBottom: "67px",
            marginLeft: "-95px",
            backgroundColor: "white",
          }}
        >
          <p className="heading1" style={{ marginBottom: "24px" }}>
            The Sleeping Gypsy
          </p>
          <p className="subhead1" style={{}}>
            Henri Rousseau
          </p>
        </div>
        <img
          style={{ margin: "auto 0 -64px;" }}
          src="./assets/the-sleeping-gypsy/artist.jpg"
        ></img>
      </div>
      <div className={styles["desciption-section"]}>
        <p className="display" style={{ marginBottom: "-35px" }}>
          1889
        </p>

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
    </div>
  );
}

export default PaintingDetail;
