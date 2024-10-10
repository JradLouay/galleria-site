import PropTypes from "prop-types";
import styles from "./GalleryItem.module.css";
import { useNavigate } from "react-router-dom";

GalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

function GalleryItem({ item, index }) {
  const navigate = useNavigate();
  function selectPicture() {
    navigate(`/slideshow/${index}/${item.name}`);
  }
  return (
    <article onClick={selectPicture} className={styles.item}>
      <img src={item.images.thumbnail} alt={item.name} />
      <div className={styles["title-container"]}>
        <h3 className="heading2">{item.name}</h3>
        <p className="subhead2">{item.artist.name}</p>
      </div>
    </article>
  );
}

export default GalleryItem;
