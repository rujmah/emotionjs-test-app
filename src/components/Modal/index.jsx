import React, { useState } from "react";

const Modal = ({ show, callback }) => {
  // const [show, setShow] = useState(false);

  return (
    <div className="modal">
      <div className="modal-backdrop"></div>
      <div className="modal-dialog">
        <button onClick={callback}>x</button>
        <h2>Show Modal</h2>
      </div>
    </div>
  );
};

export default Modal;
