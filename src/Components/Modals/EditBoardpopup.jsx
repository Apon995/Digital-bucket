import React from "react";
import { motion } from 'framer-motion';

function EditBoardpopup({
  boardName,
  setEditPopup,
  setType,
  setShowBoardModal,
}) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setEditPopup(false);
        }
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-pen-to-square text-[#635fc7]"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Edit Board</h3>
                <p className="text-sm text-gray-500">Update board details</p>
              </div>
            </div>
            <button
              onClick={() => setEditPopup(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <p className="text-gray-700 mb-4">
              Ready to edit the board 
              <span className="font-semibold text-gray-900"> "{boardName}"</span>?
            </p>
            <p className="text-sm text-gray-500">
              You'll be able to update the board name and modify columns. 
              Existing tasks will be preserved.
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-info-circle text-[#635fc7]"></i>
              <span className="text-sm text-blue-700">
                You can change column names and add new columns in the next step.
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setEditPopup(false)}
              className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setType("edit");
                setShowBoardModal(true);
                setEditPopup(false);
              }}
              className="flex-1 py-3 bg-gradient-to-r from-[#635fc7] to-[#817cf0] text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-md"
            >
              Continue to Edit
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default EditBoardpopup;
