import React from "react";
import useFetch from "../../CustomHooks/useFetch";
import Swal from 'sweetalert2';



function DeleteBoard({ setIsDeleteModalOpen, BoardName, DeleteId, refetch }) {

    const axiosFetch = useFetch();


    const HandleDelete = () => {
        axiosFetch.delete(`/DeleteBoard?ID=${DeleteId}`)
            .then(res => {
                if (res?.data?.deletedCount == 1) {
                    setIsDeleteModalOpen(false)
                    Swal.fire({
                        title: "DELETED",
                        text: "Successfully Deleted Board !",
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



    return (
        // Modal Container

        <>
            <div
                onClick={(e) => {
                    if (e.target !== e.currentTarget) {
                        return;
                    }
                    setIsDeleteModalOpen(false);
                }}
                className="fixed right-0 top-0 px-2 py-4 overflow-scroll scrollbar-hide  z-50 left-0 bottom-0 justify-center items-center flex dropdown"
            >
                {/* Delete Modal  */}

                <div className=" scrollbar-hide overflow-y-scroll max-h-[95vh]  my-auto  bg-white dark:bg-white text-black dark:text-white font-bold shadow-md shadow-[#364e7e1a] max-w-md mx-auto  w-full px-8  py-8 rounded-xl ">
                    <h3 className=" font-bold text-red-500 text-xl  ">Delete this Board?</h3>

                    <p className="text-gray-700 font-[600] tracking-wide text-sm pt-6">
                        Are you sure you want to delete the {BoardName} board? This action will remove
                        all columns and tasks .
                    </p>

                    <div className=" flex w-full mt-4 items-center justify-center space-x-4 ">
                        <button onClick={HandleDelete} className="w-full items-center text-white hover:opacity-75 bg-red-500 py-2 rounded-full">
                            Delete
                        </button>
                        <button
                            onClick={() => setIsDeleteModalOpen(false)}
                            className="w-full items-center text-[#635fc7] hover:opacity-75 bg-[#635fc71a]  py-2 rounded-full">
                            Cancel
                        </button>
                    </div>
                </div>

            </div>


        </>
    );
}

export default DeleteBoard;
