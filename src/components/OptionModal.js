import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal isOpen={!!props.selectedOption} contentLabel="selected option">
    <h3>Seletcted option</h3>
    <p>{props.selectedOption}</p>
  </Modal>
);
export default OptionModal;
