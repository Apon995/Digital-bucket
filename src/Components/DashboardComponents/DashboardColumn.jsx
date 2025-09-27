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





export default function DashboardColumn({ isActive, Datas, ShowTaskModal }) {
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




    const HandleDragAndDrop = async (result) => {
        const { source, destination } = result;



        if (!destination) return;


        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }


        const updatedData = { ...data };
        const [srcColId] = source.droppableId.split("-");
        const [destColId] = destination.droppableId.split("-");

        const sourceColumn = updatedData.Columns.find((c) => c.id == srcColId);
        const destColumn = updatedData.Columns.find((c) => c.id == destColId);

        const [movedTask] = sourceColumn.Task.splice(source.index, 1);


        if (srcColId !== destColId) {
            movedTask.status = destColumn.columnName;
        }

        destColumn.Task.splice(destination.index, 0, movedTask);


        try {


            const res = await axiosFetch.put(`/DropDown?ID=${isActive}`, result)

            if (res.data.modifiedCount > 0) {
                const audio = new Audio(ding);
                audio.play();
                refetch()

            } else {
                toast.warning("Something went wrong, try again!", {
                    position: "top-right",
                    hideProgressBar: true,
                    autoClose: 1500,
                });
                refetch();
            }
        } catch (err) {
            toast.warning("Network error, try again!", {
                position: "top-right",
                hideProgressBar: true,
                autoClose: 1500,
            });
            refetch();
        }
    };


    if (error) {
        return (
            <div className='flex items-center justify-center min-h-[60vh]'>
                <div className='text-center text-xl font-medium text-red-600 p-4 bg-red-50 rounded-lg'>
                    <i className="fa-solid fa-triangle-exclamation text-2xl mb-2"></i>
                    <p>Something went wrong! Please try again.</p>
                    <button
                        onClick={() => refetch()}
                        className="mt-3 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    if (isPending) {
        return <Loading />;
    }


       const columnColors = {
        1: "bg-red-500",
        2: "bg-green-500",
        3: "bg-blue-500",
        4: "bg-yellow-500",
        5: "bg-purple-500"
    };


    return (
        <>


            {

                <DragDropContext onDragEnd={HandleDragAndDrop}>
                    <div className="flex flex-wrap xl:justify-between gap-5 justify-center min-h-screen">

                        {
                            data?.Columns?.map((element) => (
                                 <div 
                                key={element?.id} 
                                className="w-80 bg-gray-50 rounded-lg shadow-sm p-4 flex flex-col h-full"
                            >
                                <div className="font-semibold flex items-center gap-3 mb-4 px-2">
                                    <span
                                        className={`rounded-full w-4 h-4 flex-shrink-0 ${columnColors[element.id] || "bg-gray-400"}`}
                                    ></span>
                                    <span className="text-gray-700 truncate">{element?.columnName}</span>
                                    <span className="ml-auto bg-gray-200 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                                        {element?.Task?.length}
                                    </span>
                                </div>

                                <Droppable 
                                    droppableId={`${element.id}-${element.columnName}`} 
                                    key={element.id} 
                                    type="Task"
                                >
                                    {(provided, snapshot) => (
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            className={`flex flex-col gap-3 flex-grow min-h-64 rounded-lg transition-colors ${
                                                snapshot.isDraggingOver ? "bg-blue-50" : "bg-transparent"
                                            }`}
                                        >
                                            {element?.Task?.map((task, index) => (
                                                <Draggable 
                                                    key={task._id} 
                                                    draggableId={task._id} 
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className={`bg-white rounded-lg shadow-sm border border-gray-200 p-4 cursor-grab transition-all transform ${
                                                                snapshot.isDragging 
                                                                    ? "rotate-3 shadow-lg" 
                                                                    : "hover:shadow-md hover:-translate-y-0.5"
                                                            }`}
                                                            onClick={() => {
                                                                setShowDetails(true);
                                                                setRcvObj({
                                                                    'TaskId': task._id,
                                                                    'columnId': element?.id,
                                                                    'columnName': element?.columnName,
                                                                    'title': task?.title,
                                                                    'status': task?.status,
                                                                    'description': task?.description
                                                                });
                                                            }}
                                                        >
                                                            <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                                                                {task?.title}
                                                            </h3>
                                                           
                                                                <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded">
                                                                    {task?.status}
                                                                </span>
                                                      
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                            
                                            {element?.Task?.length === 0 && (
                                                <div className="flex flex-col items-center justify-center h-64 text-gray-400 border-2 border-dashed border-gray-300 rounded-lg p-4">
                                                    <i className="fa-regular fa-folder-open text-3xl mb-2"></i>
                                                    <p className="text-sm">No tasks in this column</p>
                                                </div>
                                            )}
                                        </div>
                                    )}
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

