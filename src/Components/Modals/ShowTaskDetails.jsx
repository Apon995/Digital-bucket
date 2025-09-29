import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import useFetch from '../../CustomHooks/useFetch';
import { ToastContainer, toast } from 'react-toastify';
import ding from '../../assets/sounds/ding.mp3'
import { motion } from 'framer-motion';



function ShowTaskDetails({ isActive, setShowDetails, Rcvobj, refetch, setEditTask }) {

    const axiosFetch = useFetch();
    const { TaskId, title, columnId, status, description, } = Rcvobj || {};




    const [data, setData] = useState();
    const [updatestatus, setupdateStatus] = useState(status);




    const playSound = () => {
        const audio = new Audio(ding);
        audio.play();
    };



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




    const HandleDelete = () => {
        setShowDetails(false)



        Swal.fire({
            title: "Delete this Todo ?",
            text: `Are you sure delete ${title} todo ?`,
            icon: "question",
            showCancelButton: true,
            customClass: {
                confirmButton: 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2',
                cancelButton: 'bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            },


            confirmButtonText: "Delete it",



        }).then((result) => {
            if (result.isConfirmed) {

                axiosFetch.delete(`/DeleteTask?ID=${isActive}&TaskId=${TaskId}&columnId=${columnId}`)
                    .then(res => {
                        if (res.data.modifiedCount == 1) {
                            Swal.fire({
                                title: "Deleted Task",
                                text: "Successfully Delete Task !",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1500,

                            });

                            refetch();

                        }
                    })
                    .catch(() => {
                        Swal.fire({
                            title: "Error !",
                            text: "Some thing wrong try Again!",
                            icon: "error",
                            showConfirmButton: false,
                            timer: 1500,

                        });
                    })



            }
        });

    }


    const HandleUpdatestatus = () => {

        const obj =
        {
            "title": title,
            "description": description,
            "status": updatestatus
        }




        axiosFetch.put(`/Updatestatus?ID=${isActive}&columnId=${columnId}&currentStatus=${status}&TaskId=${TaskId}`, obj)
            .then(res => {

                if (res.data.modifiedCount == 1) {
                    Swal.fire({
                        title: "Update status",
                        text: "Successfully Update status !",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,

                    });
                    playSound();
                    refetch();
                    setShowDetails(false)

                }
            })
            .catch(error => {
                if (error) {
                    toast.warn("Somethind went worng try again !", {
                        position: "top-right",
                        hideProgressBar: true,
                        autoClose: 1000,
                    });
                }
            })

    }











    return (
        <>

         


            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setShowDetails(false)
                    }
                }}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                 
                     className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6"
                >
                    
                        {/* Header */}
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <i className="fa-solid fa-pen-to-square text-[#635fc7]"></i>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Edit Status</h3>
                                    <p className="text-sm text-gray-500">Update task status</p>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    setEditTask(true)
                                    setShowDetails(false)
                                }}
                                className="text-gray-500 hover:text-gray-600 transition-colors"
                            >
                                <i className="fa-solid fa-pen-to-square"></i>
                            </button>
                        </div>

                        {/* Content */}
                        <div className='space-y-1 py-5'>
                            <div className='space-y-2'>

                                <label className="text-sm font-medium text-gray-700">
                                    Task Name
                                </label>
                                <input
                                    id="Task"
                                    name="Task"
                                    type="text"
                                    defaultValue={title || ""}
                                    autoComplete="off"
                                    readOnly
                                    className="w-full px-4 py-3 border-2 focus:border-gray-500 outline-none rounded-lg  transition-all duration-300"

                                />


                            </div>

                            {
                                description &&
                                <div className='space-y-2'>

                                    <label className="text-sm font-medium text-gray-700">
                                        Description
                                    </label>
                                    <textarea



                                        defaultValue={description || ""}
                                        autoComplete="off"
                                        readOnly
                                        className="w-full px-4 min-h-20 max-h-28 py-3 border-2 focus:border-gray-500 outline-none rounded-lg  transition-all duration-300"

                                    />


                                </div>
                            }

                          <div className='space-y-2'>

                                <label className="text-sm font-medium text-gray-700">
                                    Current Status
                                </label>
                                <input
                                 
                                    defaultValue={status || ""}
                                    readOnly
                                    className="w-full px-4 py-3 border-2 focus:border-gray-500 outline-none rounded-lg  transition-all duration-300"

                                />


                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Changable Status
                                </label>
                                <select
                                    name="status"
                                    id="status"
                                    onChange={(e) => { setupdateStatus(e.target.value) }}
                                    value={updatestatus}
                                      className="w-full px-4 py-3 border-2 focus:border-gray-500 outline-none rounded-lg  transition-all duration-300 "

                                >
                                    {data?.Columns?.map((element, index) => (
                                        <option key={index} value={element?.columnName}>
                                            {element?.columnName}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>


                        <div className=" flex gap-3">
                            <button
                                onClick={HandleUpdatestatus}
                                disabled={status == updatestatus}
                                className="flex-1 py-3 bg-gradient-to-r from-[#635fc7] to-[#817cf0] text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-md"
                            >
                                Update status
                            </button>
                            <button onClick={HandleDelete}
                                className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300"
                            >
                                Delete Task
                            </button>

                        </div>

                </motion.div>
            </div>












            <ToastContainer />

        </>
    )
}

export default ShowTaskDetails