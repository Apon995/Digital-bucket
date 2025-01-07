import React, { useEffect, useState } from 'react'
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
    const [ShowSidebar , setShowSidebar] = useState(false)
    const [isActive, setActive] = useState();
    const [boardName, setBoardName] = useState();
  

    const [Type, setType] = useState();
    const { user } = useAuth();
    const axiosFetch = useFetch();






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


    const ToggleSidebar =()=>{

        if(ShowSidebar){

            document.getElementById('Dashboardsidebar').classList.remove('left-[-250px]')
            document.getElementById('Dashboardsidebar').classList.add('left-0')

        }
        else{
            document.getElementById('Dashboardsidebar').classList.remove('left-0')
            document.getElementById('Dashboardsidebar').classList.add('left-[-250px]')

        }



    }
  




    return (
        <div className='max-h-screen overflow-hidden'>
            <div >
                <DashboardNav ToggleSidebar={ToggleSidebar} setShowSidebar={setShowSidebar} ShowSidebar={ShowSidebar} setType={setType} isActive={isActive} EditPopup={EditPopup} setEditPopup={setEditPopup} setShowTaskModal={setShowTaskModal} BoardName={boardName} DeleteId={isActive} refetch={refetch} />
            </div>


            <div className='flex flex-row '>
                {/* ---DasboardSideBar--- */}
                <div id='Dashboardsidebar' className='lg:w-[20%] md:w-[35%] duration-700 min-w-[220px] md:z-0 z-10 bg-white h-screen md:static absolute left-[-250px]'>

                    <div style={{ maxHeight: "calc(115vh - 10rem)" }} className=' overflow-y-auto '>
                        <div className='mb-5'>
                            <h1 className='uppercase text-base text-gray-600 px-3'>All board ({data?.length})</h1>
                        </div>


                        {/* ----Dynamic--Board-- */}

                        {/* bg-[#635fc7] */}
                        <div className='pr-5'>
                            <ul className='flex flex-col gap-3' id='activeTodo'>
                                {
                                    data?.length == 0 ? <div className=" text-center flex h-[65vh] w-full justify-center items-center text-xl font-medium text-green-800">Empty Create new !</div>

                                        : error ? <div className='text-center text-xl font-medium text-red-600'>Something Wrong ! try again ?</div> : isPending ? <Loading /> : data?.map((todo) =>

                                            <li onClick={() => setActive(todo?._id)} key={todo?._id} className={` ${isActive === todo._id ? "active" : ''} flex cursor-pointer items-center gap-2 px-3 text-base text-wrap text-black font-medium py-4 border-2 rounded-r-full  `}><img src={Boardsvg} alt="boardsvg" />{todo?.BoardName}</li>
                                        )
                                }

                            </ul>
                        </div>





                        <div className='py-5'>
                            <button onClick={() => { setShowBoardModal(!ShowBoardModal), setType("new"),ToggleSidebar() }} className='flex items-center mx-auto w-fit gap-1 px-4 py-2 rounded-md text-base font-medium text-white hover:opacity-85 active:bg-black bg-[#635fc7] '><img src={Boardsvg} alt="boardsvg" />Create New Board</button>
                        </div>
                    </div>
                </div>
                {/* ----Dasboard-content--- */}
                <div className='lg:w-[80%] md:w-[65%] w-full pb-24 bg-[#f4f7fd] min-h-screen overflow-y-auto px-[1%] py-3' style={{ maxHeight: "calc(100vh - 10rem)" }}>
                    <div>
                        {
                            isActive ?
                                <DashboardColumn setType={setType} isActive={isActive} Datas={data} ShowTaskModal={ShowTaskModal} setShowTaskModal={setShowTaskModal} /> : <div className="flex min-h-screen w-full justify-center items-center text-xl font-medium text-green-500">Todos are empty ! Please create new Board & Todos .</div>
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
                    EditPopup && <EditBoardpopup  boardName={boardName} setEditPopup={setEditPopup} setType={setType} setShowBoardModal={setShowBoardModal} />

                    
                }

            </div>







        </div>
    )
}

export default Dashboard