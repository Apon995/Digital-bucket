import React, { useEffect, useState } from "react";
import useFetch from "../../CustomHooks/useFetch";
import useAuth from "../../CustomHooks/useAuth.jsx";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

function AddEditBoardModal({ setShowBoardModal, refetch, Type, isActive }) {
    const axiosFetch = useFetch();
    const { user } = useAuth();
    const [data, setData] = useState();
    const [currentData, setcurrentData] = useState();
    const [initialColumn, setInitialColumn] = useState([
        {
            id: 1,
            name: "",
        },
    ]);

    useEffect(() => {
        if (isActive && Type == "edit") {
            axiosFetch
                .get(`/Todo?ID=${isActive}`)
                .then((res) => {
                    setData(res?.data);
                    setcurrentData(res?.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [Type == "edit"]);

    const HandleBoardSubmit = (e) => {
        e.preventDefault();

        const board = new FormData(e.currentTarget);

        const obj = {
            user: user?.email || "anynomous",
            BoardName: board.get("BoardName")?.toString().trim().replace(/\s+/g, " "),
            Columns: initialColumn.map((col) => (
                {
                    id: col.id,
                    columnName: col?.name?.trim().replace(/\s+/g, " "),
                    Task: []
                }
            ))
        };



        axiosFetch
            .post("/createBoard", obj)
            .then((res) => {

                console.log(res.data)
                if (res.data?.insertedId) {
                    Swal.fire({
                        title: "Added Board !",
                        text: "Successfully Added Board !",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    e.target.reset();
                    refetch();
                    setShowBoardModal(false);
                }
            })
            .catch((error) => {
                if (error) {
                    toast.warning("Something worng try again !", {
                        position: "top-right",
                        hideProgressBar: true,
                        autoClose: 1500,
                    });
                }
            });


    };

    const HandleEdit = (e) => {
        e.preventDefault();

        const compareColumn =
            JSON.stringify(
                data?.Columns.map((c) => ({ id: c.id, columnName: c.columnName }))
            ) ===
            JSON.stringify(
                currentData?.Columns.map((c) => ({
                    id: c.id,
                    columnName: c.columnName,
                }))
            );

        const compareBoard =
            data.BoardName.trim().replace(/\s+/g, " ") ===
            currentData.BoardName.trim().replace(/\s+/g, " ");

        if (compareBoard && compareColumn) {
            Swal.fire({
                title: "Modified",
                text: "Successfully Modified Board !",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            });

            setShowBoardModal(false);

            return;
        }

        console.log(data)

        axiosFetch
            .put(`/UpdateBoard?ID=${isActive}`, data)
            .then((res) => {
                if (res?.data?.modifiedCount == 1) {
                    Swal.fire({
                        title: "Modified",
                        text: "Successfully Modified Board !",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    refetch();
                    setShowBoardModal(false);
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

    const HandleBoardChange = (e) => {
        setData((pre) => ({
            ...pre,
            BoardName: e.target?.value?.trim().replace(/\s+/g, ""),
        }));
    };

    const HandleColumnChange = (id, value) => {
        if (Type == "new") {
            setInitialColumn((pre) =>
                pre?.map((col) =>
                    col?.id == id
                        ? { ...col, name: value }
                        : col
                )
            )
        }
        else {


            setData((pre) => {
                const updateColumn = pre?.Columns?.map((col) => col.id == id ? { ...col, columnName: value } : col)

                return { ...pre, Columns: updateColumn }

            })



        }
    };



    console.log(data)

    const handleAddColumn = () => {
        if (initialColumn.length >= 6) return;
        if (Type == 'new') {
            const newId = initialColumn.length
                ? initialColumn[initialColumn.length - 1].id + 1
                : 1;
            setInitialColumn([...initialColumn, { id: newId, name: "" }]);

        }
        else {
            
            setData((pre) => {
                const newId = pre?.Columns?.length
                    ? pre?.Columns[pre?.Columns?.length - 1].id + 1
                    : 1;
                return {
                    ...pre,
                    Columns: [...pre.Columns, { id: newId, columnName: "", Task: [] }]
                }
            })



        }
    };


    console.log(data);





    const handleColumnDelete = (id, name) => {
        if (id == 1) return;
        if (Type == 'new') {
            setInitialColumn(initialColumn.filter((col) => col.id !== id));

        }
        else {
            Swal.fire({
                title: "Delete this Column ?",
                text: `Are you sure delete ${name || 'column'} ?`,
                icon: "question",
                showCancelButton: true,
                customClass: {
                    confirmButton: 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2',
                    cancelButton: 'bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                },


                confirmButtonText: "Delete it",



            }).then((result) => {
                if (result.isConfirmed) {
                    axiosFetch.delete(`/DeleteColumn?ID=${data._id}&columnId=${id}`)
                        .then(res => {
                            console.log(res)
                            if (res.data.modifiedCount == 1) {
                                Swal.fire({
                                    title: "Deleted column",
                                    text: "Successfully Delete Task !",
                                    icon: "success",
                                    showConfirmButton: false,
                                    timer: 2000,

                                });
                                setData((pre) => ({
                                    ...pre,
                                    Columns: pre.Columns.filter((col) => col.id !== id)
                                }));

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

    };





    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setShowBoardModal(false);
                    }
                }}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl shadow-2xl max-w-md w-full"
                >
                    {Type == "new" ? (
                        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Create New Board
                                    </h3>
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
                                        {initialColumn?.map((column, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <input
                                                    required
                                                    className="w-full px-4 py-3 border-2 focus:border-gray-500 outline-none rounded-lg  transition-all duration-300"
                                                    type="text"
                                                    autoComplete="off"
                                                    name={`column${index + 1}`}
                                                    id={`column${index + 1}`}
                                                    // onChange={(e) =>
                                                    //     setInitialColumn((pre) =>
                                                    //         pre?.map((col) =>
                                                    //             col?.id == column?.id
                                                    //                 ? { ...col, name: e?.target?.value }
                                                    //                 : col
                                                    //         )
                                                    //     )
                                                    // }
                                                    onChange={(e) =>
                                                        HandleColumnChange(column.id, e.target?.value)
                                                    }
                                                    placeholder={`e.g. Column ${index + 1}`}
                                                />

                                                <button
                                                    onClick={() => handleColumnDelete(column.id, null)}
                                                    type="button"
                                                    disabled={column.id == 1}
                                                    className="text-gray-600 hover:text-gray-800 p-2 disabled:opacity-60"
                                                    title="Remove column"
                                                >
                                                    <i className="fa-solid fa-xmark"></i>
                                                </button>

                                            </div>
                                        ))}
                                    </div>

                                    {/* Add New Column Button */}

                                    <button
                                        onClick={handleAddColumn}
                                        type="button"
                                        className={` ${initialColumn.length >= 6 ? "hidden" : "block"} w-full py-3 bg-gray-100 text-[#635fc7] rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 `}
                                    >
                                        <i className="fa-solid fa-plus"></i>
                                        Add New Column
                                    </button>

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
                    ) : (
                        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Edit Board
                                    </h3>
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
                                                    onChange={(e) =>
                                                        HandleColumnChange(column.id, e.target?.value)
                                                    }
                                                />
                                                <button
                                                    onClick={() => handleColumnDelete(column.id, column?.columnName)}
                                                    disabled={column?.id == 1}
                                                    type="button"
                                                    className="text-gray-600 hover:text-gray-800 p-2 disabled:opacity-60"
                                                    title="Remove column"
                                                >
                                                    <i className="fa-solid fa-xmark"></i>
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Add New Column Button */}
                                    <button
                                        onClick={handleAddColumn}
                                        type="button"
                                        className={` ${data?.Columns?.length >= 6 ? "hidden" : "block"} w-full py-3 bg-gray-100 text-[#635fc7] rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 `}
                                    >
                                        <i className="fa-solid fa-plus"></i>
                                        Add New Column
                                    </button>
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
                    )}
                </motion.div>
            </div>

            <ToastContainer />
        </>
    );
}

export default AddEditBoardModal;
