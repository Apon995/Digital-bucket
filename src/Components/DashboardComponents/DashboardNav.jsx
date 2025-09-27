import React, { useEffect, useState } from 'react';
import Logo from "../../assets/LogoFolder/Logo.png";
import { NavLink, useNavigate } from 'react-router-dom';
import DeleteBoard from '../Modals/DeleteBoard';
import { motion, AnimatePresence } from 'framer-motion';

function DashboardNav({ ToggleSidebar, setShowSidebar, ShowSidebar, setType, isActive, setShowTaskModal, ShowTaskModal, BoardName, DeleteId, refetch, setEditPopup, EditPopup }) {
  const [Popup, setPopup] = useState(false);
  const [IsDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!ShowSidebar) {
      ToggleSidebar();
      setShowSidebar(!ShowSidebar);
      setPopup(false);
    }
  }, [isActive]);

  

  return (
    <>
      <nav className='bg-white shadow-sm border-b border-gray-200 py-4 sticky top-0  px-2 lg:px-0 z-10'>
        <div className='flex items-center justify-between max-w-7xl mx-auto'>
          {/* Left Section */}
          <div className='flex items-center gap-6'>
            <div className="lg:flex hidden items-center gap-2 ">
              <img src={Logo} alt="Logo" className="w-8 h-8 " />
              <NavLink to={'/'} >
                <h1 className="font-bold text-xl text-gray-900 tracking-wide">
                  DigitalBucket
                </h1>
              </NavLink>
            </div>
            
            <div className="hidden lg:block h-6 w-px bg-gray-300"></div>
            
            <div>
              <h1 className='text-gray-900 font-bold text-xl lg:text-2xl tracking-tight truncate max-w-xs lg:max-w-md'>
                {BoardName || "Example Task"}
              </h1>
            </div>
          </div>

          {/* Right Section */}
          <div className='flex items-center gap-4 '>
            <button 
              disabled={!isActive} 
              onClick={() => {setShowTaskModal(!ShowTaskModal), setPopup(false)}} 
              className='hidden md:flex items-center gap-2 disabled:opacity-50 px-4 py-2 rounded-lg text-base font-medium text-white hover:opacity-90 bg-gradient-to-r from-[#635fc7] to-[#817cf0] transition-all duration-300 shadow-md hover:shadow-lg'
            >
              <i className="fa-solid fa-plus"></i>
              <span>Add New Task</span>
            </button>

            <div className="relative">
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={() => { setPopup(!Popup), setType("new") }} 
                className={`p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 ${Popup ? 'bg-gray-100' : ''}`}
              >
                <i className={`fa-solid ${Popup ? 'fa-xmark' : 'fa-ellipsis-vertical'} transition-all duration-600 text-gray-600 text-xl`}></i>
              </motion.button>

              {/* Popup Menu */}
              <AnimatePresence>
                {Popup && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-12 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2  "
                  >
                    <button 
                      onClick={() => { navigate('/'); setPopup(false); }} 
                      className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <i className="fa-solid fa-house text-gray-500"></i>
                      <span>Back Home</span>
                    </button>
                    
                    <button 
                      onClick={() => { setShowSidebar(!ShowSidebar); ToggleSidebar(); setPopup(false); }} 
                      className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 lg:hidden flex items-center gap-2"
                    >
                      <i className="fa-solid fa-bars text-gray-500"></i>
                      <span>{ShowSidebar ? 'Show Boards' : 'Hide Boards'}</span>
                    </button>
                    
                    <button 
                      onClick={() => { setShowTaskModal(!ShowTaskModal); setPopup(false); !ShowSidebar && ToggleSidebar(); }} 
                      className={`w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50  md:hidden flex items-center gap-2 ${!isActive ? 'hidden' : ''}`}
                    >
                      <i className="fa-solid fa-plus text-gray-500"></i>
                      <span>Add New Task</span>
                    </button>
                    
                    <button 
                      onClick={() => { setEditPopup(!EditPopup); setPopup(false); }} 
                      className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <i className="fa-solid fa-pen-to-square text-gray-500"></i>
                      <span>Edit Board</span>
                    </button>
                    
                    <div className="border-t border-gray-200 my-1"></div>
                    
                    <button 
                      onClick={() => { setIsDeleteModalOpen(true); setPopup(false); }} 
                      className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center gap-2"
                    >
                      <i className="fa-solid fa-trash text-red-500"></i>
                      <span>Delete Board</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Add Task Button */}
            <button 
              disabled={!isActive} 
              onClick={() => {setShowTaskModal(!ShowTaskModal), setPopup(false)}} 
              className='md:hidden flex items-center justify-center w-10 h-10 disabled:opacity-50 rounded-full bg-gradient-to-r from-[#635fc7] to-[#817cf0] text-white shadow-md'
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Delete Board Modal */}
      {IsDeleteModalOpen && (
        <DeleteBoard 
          setIsDeleteModalOpen={setIsDeleteModalOpen} 
          BoardName={BoardName} 
          DeleteId={DeleteId} 
          refetch={refetch} 
        />
      )}
    </>
  );
}

export default DashboardNav;