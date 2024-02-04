import PropTypes from "prop-types";
import styles from "./GalleryItem.module.css";
GalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function GalleryItem({ item }) {
  return (
    <article className={styles.item}>
      <img src={item.images.thumbnail} alt="" />
      <div className={styles["title-container"]}>
        <h3 className="heading2">{item.name}</h3>
        <p className="subhead2">{item.artist.name}</p>
      </div>
    </article>
  );
}

export default GalleryItem;
