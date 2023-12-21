/* eslint-disable react/prop-types */

import { useEffect } from "react";

const ConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
  // Close the modal when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".modal-container")) {
        onCancel();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onCancel]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen
          ? "opacity-100 backdrop-filter backdrop-blur-sm"
          : "opacity-0 pointer-events-none"
      } transition-opacity duration-300 ease-in-out z-50 text-black`}
    >
      <div className="modal-container font-bold bg-white p-4 rounded shadow-md shadow-white ">
        <p className="mb-4">Do you really want to delete all?</p>
        <div className="flex justify-end">
          <button
            className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-800"
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
