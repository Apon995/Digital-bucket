import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useFetch from "../../CustomHooks/useFetch";
import ShowTaskDetails from "../Modals/ShowTaskDetails";
import AddEditTask from "../Modals/AddEditTask";
import EditTaskpopup from "../Modals/EditTaskPopup";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { toast, ToastContainer } from "react-toastify";
import Loading from "../LoadingComponents/Loading";
import ding from '../../assets/sounds/ding.mp3'





function DashboardColumn({ isActive, Datas, ShowTaskModal}) {
    const axiosFetch = useFetch();

    const [ShowDetails, setShowDetails] = useState(false);
    const [Rcvobj, setRcvObj] = useState({});
    const [EditTask, setEditTask] = useState(false);
    const [isEdit, setEdit] = useState(false);
    const [typeEdit, setTypeEdit] = useState();


    const {
        isPending,
        error,
        data = [],
        refetch,
    } = useQuery({
        queryKey: ["signleList"],
        queryFn: () =>
            axiosFetch.get(`/Todo?ID=${isActive}`).then((res) => res?.data),
    });

    useEffect(() => {

        refetch();
    }, [isActive, Datas, ShowTaskModal]);



    const HandleDragAndDrop = (result) => {
        const { destination } = result;





        if (!destination) {

            return

        }


        const playSound = () => {
            const audio = new Audio(ding);
            audio.play();
          };






        axiosFetch.put(`/DropDown?ID=${isActive}`, result)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    playSound();
                    refetch();
                }
                else {
                    toast.warning("Something worng try again !", {
                        position: "top-right",
                        hideProgressBar: true,
                        autoClose: 1500
                    })

                }

            })
            .catch(() => {
                toast.warning("Something worng try again !", {
                    position: "top-right",
                    hideProgressBar: true,
                    autoClose: 1500
                })
            })





    };




    return (
        <>


            {
                error ? <div className='text-center min-h-[60vh] flex items-center justify-center text-xl font-medium text-red-600'>Something Wrong ! try again ?</div> : isPending ? <Loading /> :
                    <DragDropContext onDragEnd={HandleDragAndDrop}>
                        <div className="flex flex-wrap justify-between min-h-screen">

                            {
                                data?.Columns?.map((element) => (


                                    <div key={element?.id} className="md:min-w-[350px] w-[290px] py-2 px-1 rounded-md">
                                        <div className=" font-semibold flex items-center  gap-2 tracking-widest md:tracking-[.2em] text-[#828fa3]">
                                            <span
                                                className={`rounded-full w-4 h-4 ${element?.id == 3 && "bg-blue-500"
                                                    } ${element?.id == 2 && "bg-green-500"}  ${element?.id == 1 && "bg-red-500"
                                                    }   `}
                                            ></span>
                                            {element?.columnName} ({element?.Task?.length})
                                        </div>

                                        <Droppable droppableId={`${element.id}-${element.columnName}`} key={element.id} type="Task" >
                                            {
                                                (provided) => (
                                                    <div {...provided.droppableProps} ref={provided.innerRef} className="flex flex-col gap-4 mt-4">
                                                        {element?.Task?.map((a, index) => (
                                                            <Draggable key={index} draggableId={`${a._id}`} index={index}>
                                                                {
                                                                    (provided) => (
                                                                        <div draggable
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                            ref={provided.innerRef}
                                                                            onClick={() => {
                                                                                setShowDetails(!ShowDetails);
                                                                                setRcvObj({
                                                                                    'TaskId': a._id,
                                                                                    'columnId': element?.id,
                                                                                    'columnName': element?.columnName,
                                                                                    'title': a?.title,
                                                                                    'status': a?.status,
                                                                                    'description': a?.description
                                                                                });
                                                                            }}
                                                                            className="flex-1 drop-shadow-xl  bg-white max-w-[320px] shadow-md p-4 rounded-lg cursor-pointer transition duration-300 hover:bg-gray-200"
                                                                        >
                                                                            <p className="font-bold">{a?.title}</p>
                                                                            <p className="text-sm text-gray-500">{a?.status}</p>
                                                                        </div>
                                                                    )
                                                                }
                                                            </Draggable>


                                                        ))

                                                        }
                                                        {provided.placeholder}
                                                    </div>
                                                )
                                            }

                                        </Droppable>
                                    </div>
                                ))}





                        </div>

                    </DragDropContext>
            }









            {
                ShowDetails && (
                    <ShowTaskDetails
                        isActive={isActive}
                        setEditTask={setEditTask}
                        refetch={refetch}
                        setShowDetails={setShowDetails}
                        Rcvobj={Rcvobj}
                    />
                )
            }
            {
                EditTask && (
                    <EditTaskpopup
                        setEdit={setEdit}
                        setEditTask={setEditTask}
                        setTypeEdit={setTypeEdit}
                    />
                )
            }
            {
                isEdit && (
                    <AddEditTask
                        setEdit={setEdit}
                        refetch={refetch}
                        typeEdit={typeEdit}
                        isActive={isActive}
                        Rcvobj={Rcvobj}
                    />
                )
            }

            <ToastContainer />
        </>
    );
}

export default DashboardColumn;
