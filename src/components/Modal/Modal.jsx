import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 'calc(100vw - 96px)',
    maxHeight: 'calc(100vh - 48px)',
    overflow: 'hidden',
  },
};

Modal.setAppElement('#root');
const ModalBox = ({ selectedImage, closeImage }) => {
  return (
    <Modal
      isOpen={selectedImage !== null}
      shouldCloseOnEsc={selectedImage !== null}
      onRequestClose={closeImage}
      style={customStyles}
    >
      <img src={selectedImage} alt="Large" width="720px" />
    </Modal>
  );
};
export default ModalBox;

ModalBox.propTypes = {
  selectedImage: PropTypes.string.isRequired,
  closeImage: PropTypes.func.isRequired,
};
