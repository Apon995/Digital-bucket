import React, { useEffect, useRef, useState } from 'react'
import DashboardNav from './DashboardNav'
import Boardsvg from '../../assets/LogoFolder/Boardicon.svg'
import AddEditBoardModal from '../Modals/AddEditBoardModal';
import AddEditTask from '../Modals/AddEditTask';
import { useQuery } from '@tanstack/react-query';
import useFetch from '../../CustomHooks/useFetch';
import useAuth from '../../CustomHooks/useAuth';
import Loading from '../../Components/LoadingComponents/Loading.jsx';
import DashboardColumn from './DashboardColumn.jsx';
import EditBoardpopup from '../Modals/EditBoardpopup.jsx';





function Dashboard() {
    const [ShowBoardModal, setShowBoardModal] = useState(false);
    const [ShowTaskModal, setShowTaskModal] = useState(false);
    const [EditPopup, setEditPopup] = useState(false);
    const [ShowSidebar, setShowSidebar] = useState(false)
    const [isActive, setActive] = useState();
    const [boardName, setBoardName] = useState();


    const [Type, setType] = useState();
    const { user } = useAuth();
    const axiosFetch = useFetch();
    const sidebarRef = useRef(null);






    const {
        isPending,
        error,
        data = [],
        refetch
    } = useQuery({
        queryKey: ["AllTodoList"],
        queryFn: () =>
            axiosFetch
                .get(`/searchTodo?email=${user.email || 'anynomous'}`)
                .then((res) => res?.data)

    });

    useEffect(() => {

        data?.forEach((element, index) => {
            if (index == 0) {
                setActive(element?._id)




            }

        });



    }, [user, data?.length])




    useEffect(() => {
        if (isActive || ShowBoardModal) {
            axiosFetch.get(`/Todo?ID=${isActive}`)
                .then((res) => {
                    setBoardName(res?.data?.BoardName)
                })
                .catch(error => {
                    console.log(error);
                })

        }
    }, [isActive, ShowBoardModal])



    const ToggleSidebar = () => {
        if (!sidebarRef.current) return;



        if (ShowSidebar) {

            sidebarRef.current.classList.remove('left-[-250px]')
            sidebarRef.current.classList.add('left-0')

        }
        else {
            sidebarRef.current.classList.remove('left-0')
            sidebarRef.current.classList.add('left-[-250px]')

        }



    }








    return (
        <div className='max-h-screen overflow-hidden '>
            <div >
                <DashboardNav ToggleSidebar={ToggleSidebar} setShowSidebar={setShowSidebar} ShowSidebar={ShowSidebar} setType={setType} isActive={isActive} EditPopup={EditPopup} setEditPopup={setEditPopup} setShowTaskModal={setShowTaskModal} ShowTaskModal={ShowTaskModal} BoardName={boardName} DeleteId={isActive} refetch={refetch} />
            </div>



            {
                isPending ?
                    <Loading /> :

                    <div className='flex flex-row 2xl:max-w-[85rem] mx-auto'>
                        {/* ---DasboardSideBar--- */}


                        <div
                            id='Dashboardsidebar'
                            ref={sidebarRef}
                            className='lg:w-[20%] md:w-[30%] duration-700 min-w-[220px] md:z-0 z-10 bg-white h-screen md:static absolute left-[-250px] shadow-lg border-r border-gray-200'
                        >
                            <div
                                style={{ maxHeight: "calc(115vh - 10rem)" }}
                                className='overflow-y-auto pb-4'
                            >



                                <div className="flex items-center justify-between px-3 py-4">
                                    <h2 className='uppercase text-xs font-semibold text-gray-500 tracking-wider'>All Boards ({data?.length})</h2>
                                    <button
                                        onClick={() => { ToggleSidebar(), setShowSidebar(!ShowSidebar) }}
                                        className="md:hidden text-gray-400 hover:text-gray-600"
                                    >
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>

                                {/* Board List */}
                                <div className='px-3'>
                                    <ul className='flex flex-col gap-1' id='activeTodo'>

                                        {
                                            error ?
                                                <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
                                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
                                                        <i className="fa-solid fa-exclamation-circle text-red-500"></i>
                                                    </div>
                                                    <p className="text-red-500 text-sm">Something went wrong</p>
                                                    <button
                                                        onClick={() => refetch()}
                                                        className="text-xs text-gray-600 mt-2 hover:text-gray-800"
                                                    >
                                                        Try again
                                                    </button>
                                                </div> : data?.length === 0 ?
                                                    <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
                                                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                                                            <i className="fa-regular fa-clipboard text-gray-400"></i>
                                                        </div>
                                                        <p className="text-gray-500 text-sm">No boards yet</p>
                                                        <p className="text-gray-400 text-xs mt-1">Create your first board to get started</p>
                                                    </div> :

                                                    data?.map((todo) => (
                                                        <li
                                                            onClick={() => setActive(todo?._id)}
                                                            key={todo?._id}
                                                            className={`
                flex items-center gap-3 mt-1 px-3 py-3.5 rounded-r-full transition-all duration-200 cursor-pointer
                ${isActive === todo._id
                                                                    ? 'bg-[#635fc7] text-white shadow-md'
                                                                    : 'text-gray-700 hover:bg-gray-100'
                                                                }
              `}
                                                        >
                                                            <div className={`w-5 h-5 flex items-center justify-center ${isActive === todo._id ? 'text-white' : 'text-gray-500'}`}>
                                                                <img
                                                                    src={Boardsvg}
                                                                    alt="boardsvg"
                                                                    className={`w-4 h-4 ${isActive === todo._id ? 'filter brightness-0 invert' : ''}`}
                                                                />
                                                            </div>
                                                            <span className="text-sm font-medium truncate">{todo?.BoardName}</span>
                                                        </li>
                                                    ))


                                        }


                                    </ul>
                                </div>

                                {/* Create New Board Button */}
                                <div className='px-3 mt-6'>
                                    <button
                                        onClick={() => { setShowBoardModal(!ShowBoardModal), setType("new"), ToggleSidebar() }}
                                        className='w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-medium text-white bg-[#635fc7] hover:bg-[#514bbd] transition-colors duration-200 shadow-md hover:shadow-lg'
                                    >
                                        <i className="fa-solid fa-plus"></i>
                                        Create New Board
                                    </button>
                                </div>

                                {/* Help Section */}
                                <div className="px-6 mt-8 border-t border-gray-100">
                                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                                        <i className="fa-solid fa-circle-info"></i>
                                        <span>Drag and drop to organize tasks</span>
                                    </div>
                                </div>
                            </div>
                        </div>








                        {/* ----Dasboard-content--- */}
                        <div className='lg:w-[80%] md:w-[70%] w-full pb-24 bg-[#f4f7fd] min-h-screen overflow-y-auto px-[1%] py-3' style={{ maxHeight: "calc(100vh - 10rem)" }}>
                            <div>
                                {
                                    isActive ?
                                        <DashboardColumn setType={setType} isActive={isActive} Datas={data} ShowTaskModal={ShowTaskModal} setShowTaskModal={setShowTaskModal} /> :

                                        <div className="flex flex-col items-center justify-center h-64 text-gray-400 border-2 border-dashed border-gray-300 rounded-lg p-4">
                                            <i className="fa-regular fa-folder-open text-3xl mb-2"></i>
                                            <p className="text-sm">No tasks available!!</p>
                                        </div>

                                }
                            </div>
                        </div>

                        {
                            ShowBoardModal && <AddEditBoardModal isActive={isActive} Type={Type} setShowBoardModal={setShowBoardModal} refetch={refetch} />
                        }
                        {
                            ShowTaskModal && <AddEditTask setShowTaskModal={setShowTaskModal} isActive={isActive} />
                        }
                        {
                            EditPopup && <EditBoardpopup boardName={boardName} setEditPopup={setEditPopup} setType={setType} setShowBoardModal={setShowBoardModal} />


                        }

                    </div>
            }











        </div>
    )
}

export default Dashboard