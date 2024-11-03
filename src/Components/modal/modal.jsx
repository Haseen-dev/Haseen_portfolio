import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, title, techStack, image ,desc, github}) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <img src={image} alt={title} className="modal-image" />
        <h2>{title}</h2> 
        <hr />
        <h3>Description: {desc}</h3>
        <hr />
        <h3>Tech Stack: {techStack}</h3>
        <h2>GitHub: {github}</h2>
      </div>
    </div>
  );
};



export default Modal;
