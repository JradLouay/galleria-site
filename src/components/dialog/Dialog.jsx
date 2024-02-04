import { useState } from "react";
import ReactDOM from "react-dom";
import "./Dialog.module.css";

function Dialog() {
  const [open, setOpen] = useState(true);
  return ReactDOM.createPortal(
    <dialog aria-modal="true" open={open} className="modal-dialog">
      <button>Close</button>
      <p>This modal dialog has a groovy backdrop!</p>
    </dialog>,
    document.body
  );
}

export default Dialog;
