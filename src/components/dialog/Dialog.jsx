import { forwardRef } from "react";
import PropTypes from "prop-types";

import styles from "./Dialog.module.css";

const Dialog = forwardRef(function Dialog(props, ref) {
  const { PaintingUrl, closeModal } = props;
  return (
    <dialog aria-modal="true" ref={ref} className={styles.dialog}>
      <button onClick={closeModal} className="body">
        close
      </button>
      <img src={PaintingUrl} alt={"painting"} />
    </dialog>
  );
});
Dialog.propTypes = {
  PaintingUrl: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Dialog;
