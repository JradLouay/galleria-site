import PropTypes from "prop-types";
import styles from "./GalleryItem.module.css";
import { useContext } from "react";
import { GalleryContext } from "../../GalleryContext";
import { useNavigate } from "react-router-dom";

GalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

function GalleryItem({ item, index }) {
  const navigate = useNavigate();
  const { dispatch } = useContext(GalleryContext);
  function selectPicture() {
    dispatch({
      type: "select-picture",
      payload: { pictureIndex: index },
    });
    navigate("/slideshow");
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
