import React from "react";
import "./Modal.scss";

const ModalComponents = ({ ModalOnOff, id }) => {
  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      ModalOnOff();
    }
  };
  return (
    <div className="modal__container" onClick={onCloseModal}>
      <div className="modal">
        <button className="modal__button" onClick={ModalOnOff}>
          {" "}
          Modal Close
        </button>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default ModalComponents;
