import useFetch from "../../CustomHooks/useFetch";
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

function DeleteBoard({ setIsDeleteModalOpen, BoardName, DeleteId, refetch }) {
    const axiosFetch = useFetch();

    const HandleDelete = () => {
        axiosFetch.delete(`/DeleteBoard?ID=${DeleteId}`)
            .then(res => {
                if (res?.data?.deletedCount == 1) {
                    setIsDeleteModalOpen(false)
                    Swal.fire({
                        title: "DELETED",
                        text: "Successfully Deleted Board!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    refetch();
                }
            })
            .catch(() => {
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong. Please try again!",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    setIsDeleteModalOpen(false);
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
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                <i className="fa-solid fa-trash text-red-500"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Delete Board</h3>
                                <p className="text-sm text-gray-500">This action cannot be undone</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsDeleteModalOpen(false)}
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
                            Are you sure you want to delete the board 
                            <span className="font-semibold text-gray-900"> "{BoardName}"</span>?
                        </p>
                        <p className="text-sm text-gray-500">
                            This will permanently delete the board and all associated tasks. 
                            This action cannot be reversed.
                        </p>
                    </div>

                    {/* Warning Icon */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                        <div className="flex items-center gap-3">
                            <i className="fa-solid fa-triangle-exclamation text-red-500"></i>
                            <span className="text-sm text-red-700 font-medium">
                                Warning: This action is permanent
                            </span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => setIsDeleteModalOpen(false)}
                            className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={HandleDelete}
                            className="flex-1 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-all duration-300 shadow-md"
                        >
                            Delete Board
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default DeleteBoard;