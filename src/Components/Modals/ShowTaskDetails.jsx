import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import useFetch from '../../CustomHooks/useFetch';
import { ToastContainer, toast } from 'react-toastify';
import ding from '../../assets/sounds/ding.mp3'



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
            text: `are you sure delete ${title} todo ?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosFetch.delete(`/DeleteTask?ID=${isActive}&TaskId=${TaskId}&columnId=${columnId}`)
                    .then(res => {
                        console.log(res.data)
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

            <>
                <div
                    onClick={(e) => {
                        if (e.target !== e.currentTarget) {
                            return;
                        }

                        setShowDetails(false)

                    }}
                    className="fixed right-0 top-0 px-2 py-4 overflow-scroll scrollbar-hide  z-50 left-0 bottom-0 justify-center items-center flex dropdown"
                >
                    {/* show Task Modal  */}

                    <div className=" scrollbar-hide overflow-y-scroll max-h-[115vh]  my-auto  bg-white dark:bg-white text-black dark:text-white font-bold shadow-md shadow-[#364e7e1a] max-w-md mx-auto  w-full px-6  py-8 rounded-xl ">
                        <div className='flex flex-row items-center justify-between'>
                            <div className='w-[90%] text-wrap '>
                                <h3 className=" font-bold text-[#635fc7] text-xl  ">{title || 'Example Task'}?</h3>

                            </div>
                            <div className='w-[10%]'>

                                <button onClick={() => {
                                    setEditTask(true)
                                    setShowDetails(false)
                                }} className='text-gray-600 text-xl '><i className="fa-solid fa-pen-to-square"></i></button>


                            </div>
                        </div>
                        <p className="text-gray-700 font-[600] tracking-wide text-sm pt-6">
                            {description || ''}
                        </p>

                        <div className='pt-5'>
                            <span className="  text-base dark:text-black text-black">
                                Current Status
                            </span>
                            <div className=" w-full mt-2 select-status flex-grow px-4 py-2 rounded-md text-base text-gray-700 border-[2px] outline-none border-gray-600  ">
                                {status || 'Todo'}
                            </div>

                        </div>
                        <div className="py-2 text-base dark:text-black text-black">
                            <h1 className='mb-2'>You can change status</h1>
                            <select
                                name="status"
                                id="status"
                                onChange={(e) => { setupdateStatus(e.target.value) }}
                                value={updatestatus}
                                className=" select-status w-full text-gray-700 flex-grow px-4 py-2 rounded-md text-base border-[2px] outline-none border-gray-600 focus:border-[#635fc7] "
                            >
                                {data?.Columns?.map((element, index) => (
                                    <option key={index} value={element?.columnName}>
                                        {element?.columnName}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className=" flex md:flex-row flex-col w-full gap-5 md:gap-4 mt-8 items-center justify-center">
                            <button
                                onClick={HandleUpdatestatus}
                                disabled={status == updatestatus}
                                className="w-full text-base items-center text-[#635fc7]  bg-[#635fc71a] rounded-md py-2 md:rounded-full disabled:bg-blue-500 disabled:text-black disabled:opacity-80">
                                Update status
                            </button>
                            <button onClick={HandleDelete} className="w-full text-base items-center text-white rounded-md hover:opacity-90 bg-red-500 py-2 md:rounded-full">
                                Delete Task
                            </button>
                        </div>



                    </div>

                </div>






            </>









            <ToastContainer />

        </>
    )
}

export default ShowTaskDetails