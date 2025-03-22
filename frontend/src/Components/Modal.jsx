import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
