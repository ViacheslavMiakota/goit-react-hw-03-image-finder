import React from 'react';

const Modal = ({ selectedImage }) => {
  <div isOpen={selectedImage !== null}>
    <img src={selectedImage} alt="Large" width="720px" />
  </div>;
};
export default Modal;
