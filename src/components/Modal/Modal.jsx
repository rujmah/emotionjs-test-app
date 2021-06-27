import { ModalContainer } from "./Modal.styles";

const ModalShow = ({ closeCallback, children }) => (
  <ModalContainer>
    <div className="modal-backdrop"></div>
    <div className="modal-dialog">
      <button onClick={closeCallback}>x</button>
      <h2>Show Modal</h2>
      <div className="modal-content">{children}</div>
    </div>
  </ModalContainer>
);

const Modal = ({ show, closeCallback, children }) => {
  return (
    <>
      <div className="modal">
        <p>Modal</p>
        {show && (
          <ModalShow closeCallback={closeCallback}>{children}</ModalShow>
        )}
      </div>
    </>
  );
};

export { Modal };
