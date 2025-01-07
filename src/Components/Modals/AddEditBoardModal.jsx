import React, { useEffect, useState } from "react";
import useFetch from "../../CustomHooks/useFetch";
import useAuth from "../../CustomHooks/useAuth.jsx";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";





function AddEditBoardModal({ setShowBoardModal, refetch, Type, isActive }) {


    const axiosFetch = useFetch();
    const { user } = useAuth();
    const [data, setData] = useState();

    useEffect(() => {

        if (isActive && Type == 'edit') {
            axiosFetch.get(`/Todo?ID=${isActive}`)
                .then((res) => {
                    setData(res?.data)
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
            "BoardName": board.get('BoardName').trim().replace(/\s+/g, ' '),
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

        const board = new FormData(e.currentTarget);


        const obj = {
            "BoardName": board.get('BoardName').trim().replace(/\s+/g, ' '),
            "Columns": [
                {
                    'id': 1,
                    "columnName": board.get('FirstColumn').trim().replace(/\s+/g, ' '),
                },
                {
                    'id': 2,
                    "columnName": board.get('SecondColumn').trim().replace(/\s+/g, ' '),
                },
                {
                    'id': 3,
                    "columnName": board.get('ThirdColumn').trim().replace(/\s+/g, ' ')
                }

            ],

        }




        axiosFetch.put(`/UpdateBoard?ID=${isActive}`, obj)
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


    return (
        <>

            {
                Type == 'new' ?
                    // ----if--type--is--new--
                    <div
                        className="  fixed right-0 top-0 px-2 py-4 overflow-scroll scrollbar-hide  z-50 left-0 bottom-0 justify-center items-center flex dropdown "

                        onClick={(e) => {
                            if (e.target !== e.currentTarget) {

                                return
                            }
                            setShowBoardModal(false)
                        }}

                    >
                        <div
                            className=" scrollbar-hide overflow-y-scroll max-h-[95vh] shadow-lg  bg-white dark:bg-white  text-black dark:text-black font-bold
                      shadow-[#364e7e1a] max-w-md mx-auto my-auto w-full px-8  py-8 rounded-xl"
                        >
                            <h3 className=" text-lg ">
                                Board
                            </h3>

                            {/* Task Name */}

                            <form onSubmit={HandleBoardSubmit}>
                                <div className="mt-4 flex flex-col space-y-1">
                                    <label className="  text-sm dark:text-black text-black">
                                        Board Name
                                    </label>
                                    <input
                                        type="text"
                                        name="BoardName"
                                        id="BoardName"
                                        autoComplete="off"
                                        required
                                        className=" bg-transparent  px-4 py-2 rounded-md text-sm border-[2px] outline-none border-gray-600 focus:border-[#635fc7] "
                                        placeholder=" e.g Web Design"
                                    />
                                </div>

                                {/* Board Columns */}

                                <div className="mt-8 flex flex-col space-y-3">
                                    <label className=" text-sm dark:text-black text-black">
                                        Board Columns
                                    </label>

                                    <div className=" flex flex-col gap-2 items-center w-full ">
                                        <input
                                            required
                                            className=" w-full bg-transparent flex-grow px-4 py-2 rounded-md text-sm outline-none border-[2px] border-gray-600 focus:border-[#635fc7]"
                                            type="text"
                                            autoComplete="off"
                                            name="FirstColumn"
                                            id="FirstColumn"
                                            placeholder="example Todo"
                                        />
                                        <input
                                            required
                                            className=" w-full bg-transparent flex-grow px-4 py-2 rounded-md text-sm outline-none border-[2px] border-gray-600 focus:border-[#635fc7]"
                                            type="text"
                                            name="SecondColumn"
                                            autoComplete="off"
                                            id="SecondColumn"
                                            placeholder="example Doing"
                                        />
                                        <input
                                            required
                                            className=" w-full bg-transparent flex-grow px-4 py-2 rounded-md text-sm outline-none border-[2px] border-gray-600 focus:border-[#635fc7]"
                                            type="text"
                                            name="ThirdColumn"
                                            autoComplete="off"
                                            id="ThirdColumn"
                                            placeholder="example Done"
                                        />

                                    </div>

                                </div>

                                <div>

                                    <div className="mt-3">
                                        <button className=" w-full active:bg-black items-center hover:opacity-85 dark:text-white dark:bg-[#635fc7] mt-8 relative  text-white bg-[#635fc7] py-2 rounded-full"
                                        >
                                            Add now
                                        </button>
                                    </div>
                                </div>



                            </form>


                        </div>
                    </div> :

                    // ---if--type--is--edit--
                    <div
                        className="  fixed right-0 top-0 px-2 py-4 overflow-scroll scrollbar-hide  z-50 left-0 bottom-0 justify-center items-center flex dropdown "

                        onClick={(e) => {
                            if (e.target !== e.currentTarget) {

                                return
                            }
                            setShowBoardModal(false)
                        }}

                    >
                        <div
                            className=" scrollbar-hide overflow-y-scroll max-h-[95vh] shadow-lg  bg-white dark:bg-white  text-black dark:text-black font-bold
                      shadow-[#364e7e1a] max-w-md mx-auto my-auto w-full px-8  py-8 rounded-xl"
                        >
                            <h3 className=" text-lg ">
                                Board
                            </h3>

                            {/* Task Name */}

                            <form onSubmit={HandleEdit}>
                                <div className="mt-4 flex flex-col space-y-1">
                                    <label className="  text-sm dark:text-black text-black">
                                        Board Name
                                    </label>
                                    <input
                                        type="text"
                                        name="BoardName"
                                        id="BoardName"
                                        required
                                        className=" bg-transparent  px-4 py-2 rounded-md text-sm border-[2px] outline-none border-gray-600 focus:border-[#635fc7] "
                                        placeholder=" e.g Web Design"
                                        defaultValue={data?.BoardName}
                                    />
                                </div>

                                {/* Board Columns */}

                                <div className="mt-8 flex flex-col space-y-3">
                                    <label className=" text-sm dark:text-black text-black">
                                        Board Columns
                                    </label>

                                    <div className=" flex flex-col gap-2 items-center w-full ">
                                        <input
                                            required
                                            className=" w-full bg-transparent flex-grow px-4 py-2 rounded-md text-sm outline-none border-[2px] border-gray-600 focus:border-[#635fc7]"
                                            type="text"
                                            name="FirstColumn"
                                            id="FirstColumn"
                                            placeholder="example Todo"
                                            defaultValue={data?.Columns[0]?.columnName}
                                        />
                                        <input
                                            required
                                            className=" w-full bg-transparent flex-grow px-4 py-2 rounded-md text-sm outline-none border-[2px] border-gray-600 focus:border-[#635fc7]"
                                            type="text"
                                            name="SecondColumn"
                                            id="SecondColumn"
                                            placeholder="example Doing"
                                            defaultValue={data?.Columns[1]?.columnName}
                                        />
                                        <input
                                            required
                                            className=" w-full bg-transparent flex-grow px-4 py-2 rounded-md text-sm outline-none border-[2px] border-gray-600 focus:border-[#635fc7]"
                                            type="text"
                                            name="ThirdColumn"
                                            id="ThirdColumn"
                                            placeholder="example Done"
                                            defaultValue={data?.Columns[2]?.columnName}
                                        />

                                    </div>

                                </div>

                                <div>

                                    <div className="mt-3">
                                        <button className=" w-full active:bg-black items-center hover:opacity-85 dark:text-white dark:bg-[#635fc7] mt-8 relative  text-white bg-[#635fc7] py-2 rounded-full"
                                        >
                                            confirm edit
                                        </button>
                                    </div>
                                </div>



                            </form>


                        </div>
                    </div>
            }









            <ToastContainer />
        </>
    );
}

export default AddEditBoardModal;