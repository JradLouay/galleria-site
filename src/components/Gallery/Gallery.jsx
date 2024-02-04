import data from "../../assets/data.json";
import styles from "./Gallery.module.css";
import GalleryItem from "./GalleryItem";
function Gallery() {
  return (
    <section className={styles.container}>
      {data.map(function mapData(item, index) {
        return <GalleryItem key={index} item={item} index={index} />;
      })}
    </section>
  );
}

export default Gallery;
