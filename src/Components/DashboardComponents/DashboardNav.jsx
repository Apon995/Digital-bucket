import React, { useEffect, useState } from 'react';
import Logo from "../../assets/LogoFolder/Logo.png";
import { NavLink, useNavigate } from 'react-router-dom';
import DeleteBoard from '../Modals/DeleteBoard';

function DashboardNav({ ToggleSidebar, setShowSidebar, ShowSidebar, setType, isActive, setShowTaskModal, ShowTaskModal, BoardName, DeleteId, refetch, setEditPopup, EditPopup }) {
  const [Popup, setPopup] = useState(false);
  const [IsDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!ShowSidebar) {
      ToggleSidebar()
      setShowSidebar(!ShowSidebar)
      setPopup(false)
    }

  }, [isActive])







  return (
    <>

      <nav className='py-4 px-[3%] bg-white flex items-center justify-between'>


        <div className='flex items-center gap-10'>
          <div className="lg:flex hidden items-center gap-1">
            <img src={Logo} alt="Logo" className="w-[30px]" />
            <NavLink to={'/'}>
              <h1 className="font-bold text-xl text-black tracking-widest uppercase">
                DigitalBucket
              </h1>
            </NavLink>

          </div>
          <div>
            <h1 className='text-black font-bold tracking-tighter text-2xl uppercase'>{BoardName || "Example Task"}</h1>
          </div>


        </div>
        <div className='flex flex-row items-center gap-9'>
          <button disabled={!isActive} onClick={() => {setShowTaskModal(!ShowTaskModal), setPopup(false)}} className=' md:block hidden disabled:opacity-75 px-4 py-2 rounded-md text-base font-medium text-white hover:opacity-90 disabled:active:bg-[#635fc7] active:bg-black bg-[#635fc7]'>+ Add New Task</button>

          <button onClick={() => { setPopup(!Popup), setType("new") }} className={` text-gray-500 md:text-2xl text-3xl font-medium`}>{Popup ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-ellipsis-vertical"></i>}</button>
        </div>


      </nav>


      {/* bg-[#f4f7fd]  */}


      {
        Popup && <div
          className=" absolute w-40 text-sm z-50 font-medium shadow-md shadow-[#364e7e1a] bg-white dark:bg-white space-y-4 py-5 px-4 rounded-lg  h-auto right-[25px]">
          <button onClick={() => navigate('/')} className="cursor-pointer dark:text-gray-700 text-gray-700 font-semibold">Back Home</button>
          <button onClick={() => { setShowSidebar(!ShowSidebar), ToggleSidebar(), setPopup(false) }} className="md:hidden cursor-pointer dark:text-gray-700 text-gray-700 font-semibold">{ShowSidebar ? 'Show All board' : 'Hide All Board'}</button>
          <button onClick={() => { setShowTaskModal(!ShowTaskModal), setPopup(false), !ShowSidebar ? ToggleSidebar() : '' }} className={`${!isActive ? 'hidden' : ''} md:hidden cursor-pointer dark:text-gray-700 text-gray-700 font-semibold`}>Add New Task</button>
          <button onClick={() => { setEditPopup(!EditPopup), setPopup(!Popup) }} className=" cursor-pointer dark:text-gray-700 text-gray-700 font-semibold">
            Edit Boards
          </button>

          <button onClick={() => { setIsDeleteModalOpen(!IsDeleteModalOpen), setPopup(!Popup) }} className=" cursor-pointer text-red-500 font-bold">Delete Boards</button>
        </div>
      }

      {
        IsDeleteModalOpen && <DeleteBoard setIsDeleteModalOpen={setIsDeleteModalOpen} BoardName={BoardName} DeleteId={DeleteId} refetch={refetch} />
      }











    </>
  )
}

export default DashboardNav