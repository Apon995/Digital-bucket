import React, { useEffect, useState } from "react";
import useFetch from "../../CustomHooks/useFetch";
import useAuth from "../../CustomHooks/useAuth.jsx";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";





function AddEditBoardModal({ setShowBoardModal, refetch, Type, isActive }) {


    const axiosFetch = useFetch();
    const { user } = useAuth();
    const [data, setData] = useState();
    const [currentData, setcurrentData] = useState();

    useEffect(() => {

        if (isActive && Type == 'edit') {
            axiosFetch.get(`/Todo?ID=${isActive}`)
                .then((res) => {
                    setData(res?.data)
                    setcurrentData(res?.data);

                })
                .catch(error => {
                    console.log(error);
                })

        }


    }, [Type == 'edit'])




    const HandleBoardSubmit = (e) => {
        e.preventDefault();

        const board = new FormData(e.currentTarget);


        const obj = {
            "user": user?.email || "anynomous",
            "firstColumn": board.get('FirstColumn').trim().replace(/\s+/g, ' '),
            "secondColumn": board.get('SecondColumn').trim().replace(/\s+/g, ' '),
            "thirdColumn": board.get('ThirdColumn').trim().replace(/\s+/g, ' '),
        }



        axiosFetch.post('/createBoard', obj)
            .then(res => {
                if (res.data?.insertedId) {
                    Swal.fire({
                        title: "Added Board !",
                        text: "Successfully Added Board !",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    e.target.reset();
                    refetch()
                    setShowBoardModal(false)
                }

            })
            .catch(error => {
                if (error) {
                    toast.warning("Something worng try again !", {
                        position: "top-right",
                        hideProgressBar: true,
                        autoClose: 1500
                    })
                }
            })
    }





    const HandleEdit = (e) => {

        e.preventDefault();

        const compareColumn = JSON.stringify(
            data?.Columns.map(c => ({ id: c.id, columnName: c.columnName }))
        ) === JSON.stringify(
            currentData?.Columns.map(c => ({ id: c.id, columnName: c.columnName }))
        )


        const compareBoard = data.BoardName.trim().replace(/\s+/g, ' ') === currentData.BoardName.trim().replace(/\s+/g, ' ')

        if (compareBoard && compareColumn ) {
               Swal.fire({
                        title: "Modified",
                        text: "Successfully Modified Board !",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,

                    });

                     setShowBoardModal(false)

                     return;
        }

        axiosFetch.put(`/UpdateBoard?ID=${isActive}`, data)
            .then(res => {
                if (res?.data?.modifiedCount == 1) {
                    Swal.fire({
                        title: "Modified",
                        text: "Successfully Modified Board !",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,

                    });
                    refetch();
                    setShowBoardModal(false)
                }
            })
            .catch(error => {
                if (error) {
                    toast.warn("Somethind went worng try again !", {
                        position: "top-right",
                        hideProgressBar: true,
                        autoClose: 1000,

                    })
                }
            })

    }


    const HandleBoardChange = (e) => {
  
        setData((pre) => ({ ...pre, BoardName: e.target?.value?.trim().replace(/\s+/g, "") }))
    }



    const HandleColumnChange = (index, value) => {
        setData((prev) => {
            const updatedColumns = [...prev?.Columns];
            updatedColumns[index] = {
                ...updatedColumns[index],
                columnName: value?.trim().replace(/\s+/g, " "),
            };

            return { ...prev, Columns: updatedColumns };
        });
    };






    return (



        <>
            {Type === 'new' ? (
                // Create New Board Modal
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setShowBoardModal(false);
                        }
                    }}
                >
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-900">Create New Board</h3>
                                <button
                                    onClick={() => setShowBoardModal(false)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <i className="fa-solid fa-xmark text-lg"></i>
                                </button>
                            </div>
                        </div>

                        <form onSubmit={HandleBoardSubmit} className="p-6 space-y-6">
                            {/* Board Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Board Name
                                </label>
                                <input
                                    type="text"
                                    name="BoardName"
                                    id="BoardName"
                                    autoComplete="off"
                                    required
                                    className="w-full px-4 py-3 border-2 focus:border-gray-500 outline-none rounded-lg  transition-all duration-300"
                                    placeholder="e.g. Web Design"
                                />
                            </div>

                            {/* Board Columns */}
                            <div className="space-y-4">
                                <label className="text-sm font-medium text-gray-700">
                                    Board Columns
                                </label>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <input
                                            required
                                            className="w-full px-4 py-3 border-2 focus:border-gray-500 outline-none rounded-lg  transition-all duration-300"
                                            type="text"
                                            autoComplete="off"
                                            name="FirstColumn"
                                            id="FirstColumn"
                                            placeholder="e.g. Todo"
                                        />
                                        {/* <button
                                            type="button"
                                            className="text-gray-400 hover:text-gray-600 p-2"
                                            title="Remove column"
                                        >
                                            <i className="fa-solid fa-xmark"></i>
                                        </button> */}
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <input
                                            required
                                            className="w-full px-4 py-3 border-2 focus:border-gray-500 outline-none rounded-lg  transition-all duration-300"
                                            type="text"
                                            name="SecondColumn"
                                            autoComplete="off"
                                            id="SecondColumn"
                                            placeholder="e.g. Doing"
                                        />
                                        {/* <button
                                            type="button"
                                            className="text-gray-400 hover:text-gray-600 p-2"
                                            title="Remove column"
                                        >
                                            <i className="fa-solid fa-xmark"></i>
                                        </button> */}
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <input
                                            required
                                            className="w-full px-4 py-3 border-2 focus:border-gray-500 outline-none rounded-lg  transition-all duration-300"
                                            type="text"
                                            name="ThirdColumn"
                                            autoComplete="off"
                                            id="ThirdColumn"
                                            placeholder="e.g. Done"
                                        />
                                        {/* <button
                                            type="button"
                                            className="text-gray-400 hover:text-gray-600 p-2"
                                            title="Remove column"
                                        >
                                            <i className="fa-solid fa-xmark"></i>
                                        </button> */}
                                    </div>
                                </div>

                                {/* Add New Column Button */}
                                {/* <button
                                    type="button"
                                    className="w-full py-3 bg-gray-100 text-[#635fc7] rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <i className="fa-solid fa-plus"></i>
                                    Add New Column
                                </button> */}
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#635fc7] to-[#817cf0] text-white py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-md"
                                >
                                    Create New Board
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                // Edit Board Modal
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setShowBoardModal(false);
                        }
                    }}
                >
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-900">Edit Board</h3>
                                <button
                                    onClick={() => setShowBoardModal(false)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <i className="fa-solid fa-xmark text-lg"></i>
                                </button>
                            </div>
                        </div>

                        <form onSubmit={HandleEdit} className="p-6 space-y-6">
                            {/* Board Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Board Name
                                </label>
                                <input
                                    type="text"
                                    name="BoardName"
                                    id="BoardName"
                                    required
                                    className="w-full px-4 py-3 border-2 focus:border-gray-500 outline-none rounded-lg  transition-all duration-300"
                                    placeholder="e.g. Web Design"
                                    defaultValue={data?.BoardName}
                                    onChange={HandleBoardChange}
                                />
                            </div>

                            {/* Board Columns */}
                            <div className="space-y-4">
                                <label className="text-sm font-medium text-gray-700">
                                    Board Columns
                                </label>

                                <div className="space-y-3">
                                    {data?.Columns?.map((column, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <input
                                                required
                                                className="w-full px-4 py-3 border-2 focus:border-gray-500 outline-none rounded-lg  transition-all duration-300"
                                                type="text"
                                                name={`column${index + 1}`}
                                                defaultValue={column?.columnName}
                                                placeholder={`Column ${index + 1}`}
                                                onChange={(e) => HandleColumnChange(index, e.target?.value)}
                                            />
                                            {/* <button
                                                type="button"
                                                className="text-gray-400 hover:text-gray-600 p-2"
                                                title="Remove column"
                                            >
                                                <i className="fa-solid fa-xmark"></i>
                                            </button> */}
                                        </div>
                                    ))}
                                </div>

                                {/* Add New Column Button */}
                                {/* <button
                                    type="button"
                                    className="w-full py-3 bg-gray-100 text-[#635fc7] rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <i className="fa-solid fa-plus"></i>
                                    Add New Column
                                </button> */}
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#635fc7] to-[#817cf0] text-white py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-md"
                                >
                                    Save Changes
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

export default AddEditBoardModal;