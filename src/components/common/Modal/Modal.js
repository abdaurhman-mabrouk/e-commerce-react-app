import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-header">
        <button onClick={onClose}>Close</button>
      </div>
      <div className="modal-body">{children}</div>
    </div>
  );
}

export default Modal;
