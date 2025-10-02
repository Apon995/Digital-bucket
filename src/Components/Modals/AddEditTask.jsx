import React, { useEffect, useState } from "react";
import useFetch from "../../CustomHooks/useFetch";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

function AddEditTask({
    setShowTaskModal,
    isActive,
    setEdit,
    typeEdit,
    Rcvobj,
    refetch,
}) {
    const [data, setData] = useState();
    const {
        title,
        columnId,
        TaskId,
        columnName,
        description,
        status: currentStatus,
    } = Rcvobj || {};

    const axiosFetch = useFetch();

    useEffect(() => {
        if (isActive) {
            axiosFetch
                .get(`/Todo?ID=${isActive}`)
                .then((res) => {
                
                    setData(res?.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [isActive]);


    

    const HandleSubmit = (e) => {
        e.preventDefault();

        const from = new FormData(e.currentTarget);

        const TaskName = from.get("Task").trim().replace(/\s+/g, " ");
        const Description = from.get("description").trim().replace(/\s+/g, " ");
        const status = from.get("status").trim().replace(/\s+/g, " ");

        const BoardName = data?.BoardName;

        const obj = {
            title: TaskName,
            description: Description,
            status: status,
        };


        axiosFetch
            .post(`/TaskInsert?ID=${isActive}&BoardName=${BoardName}&status=${status}`, obj)
            .then((res) => {
                if (res?.data?.modifiedCount == 1) {
                    Swal.fire({
                        title: "Added Task",
                        text: "Successfully Added Task !",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    setShowTaskModal(false);
                }
            })
            .catch((error) => {
                if (error) {
                    Swal.fire({
                        title: "Error !",
                        text: "Some thing wrong try Again!",
                        icon: "error",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    const HandleUpdate = (e) => {
        e.preventDefault();
        const from = new FormData(e.currentTarget);

        const TaskName = from.get("Task").trim().replace(/\s+/g, " ");
        const Description = from.get("description").trim().replace(/\s+/g, " ");

        const obj = {
            title: TaskName,
            description: Description,
            status: currentStatus,
        };

     if(description == Description && title == TaskName) return ; 


        axiosFetch
            .put(
                `/UpdateTask?ID=${isActive}&columnId=${columnId}&TaskId=${TaskId}`,
                obj
            )
            .then((res) => {
                
                if (res?.data?.modifiedCount == 1) {
                    Swal.fire({ 
                        title: "Modified",
                        text: "Successfully column deleted !",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    refetch();
                    setEdit(false);
                }
            })
            .catch((error) => {
                if (error) {
                    toast.warn("Somethind went worng try again !", {
                        position: "top-right",
                        hideProgressBar: true,
                        autoClose: 1000,
                    });
                }
            });
    };

    return (
      
        <>
            {typeEdit === "edit" ? (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setEdit(false);
                        }
                    }}
                >
                    {/* Edit Modal */}
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-900">Edit Task</h3>
                                <button
                                    onClick={() => setEdit(false)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <i className="fa-solid fa-xmark text-lg"></i>
                                </button>
                            </div>
                        </div>

                        <form onSubmit={HandleUpdate} className="p-6 space-y-6">
                            {/* Task Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Task Name
                                </label>
                                <input
                                    id="Task"
                                    name="Task"
                                    type="text"
                                    defaultValue={title}
                                    autoComplete="off"
                                    required
                                    className="w-full px-4 py-3 border-2 focus:border-gray-500 outline-none rounded-lg  transition-all duration-300"
                                    placeholder="e.g. Take coffee break"
                                />
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    defaultValue={description}
                                    autoComplete="off"
                                    rows={4}
                                    className="w-full px-4 py-3 border-2 focus:border-gray-500 outline-none rounded-lg  transition-all duration-300 resize-none"
                                    placeholder="Describe your task..."
                                />
                            </div>

                            {/* Current Status */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Current Status
                                </label>
                                <div className="px-4 py-3 border border-gray-300 rounded-lg bg-gray-50">
                                    <span className="text-gray-700 font-medium">{columnName}</span>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#635fc7] to-[#817cf0] text-white py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-md"
                                >
                                    Confirm Edit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setShowTaskModal(false);
                        }
                    }}
                >
                    {/* Add Task Modal */}
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-900">Add New Task</h3>
                                <button
                                    onClick={() => setShowTaskModal(false)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <i className="fa-solid fa-xmark text-lg"></i>
                                </button>
                            </div>
                        </div>

                        <form onSubmit={HandleSubmit} className="p-6 space-y-6">
                            {/* Task Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Task Name
                                </label>
                                <input
                                    id="Task"
                                    name="Task"
                                    type="text"
                                    autoComplete="off"
                                    required
                                    className="w-full px-4 py-3 border-2 focus:border-gray-500 outline-none rounded-lg transition-all duration-300"
                                    placeholder="e.g. Take coffee break"
                                />
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    autoComplete="off"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border-2 focus:border-gray-500 outline-none transition-all duration-300 resize-none"
                                    placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little."
                                />
                            </div>

                            {/* Status Selection */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Current Status
                                </label>
                                <select
                                    name="status"
                                    id="status"
                                    className="w-full px-4 py-3 border-2 focus:border-gray-500 outline-none rounded-lg transition-all duration-300 appearance-none bg-white"
                                >
                                    {data?.Columns?.map((element, index) => (
                                        <option key={index} value={element?.columnName}>
                                            {element?.columnName}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#635fc7] to-[#817cf0] text-white py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-md"
                                >
                                    Create New Task
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <ToastContainer />
        </>


    );
}

export default AddEditTask;
