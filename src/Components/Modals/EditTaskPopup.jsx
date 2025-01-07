import React from "react";

function EditTaskpopup({ setEditTask, setEdit, setTypeEdit }) {
  return (
    <>
      <>
        <div
          onClick={(e) => {
            if (e.target !== e.currentTarget) {
              return;
            }
            setEditTask(false);
          }}
          className="fixed right-0 top-0 px-2 py-4 overflow-scroll scrollbar-hide  z-50 left-0 bottom-0 justify-center items-center flex dropdown"
        >
          {/* Edit Task Modal  */}

          <div className=" scrollbar-hide overflow-y-scroll max-h-[95vh]  my-auto  bg-white dark:bg-white text-black dark:text-white font-bold shadow-md shadow-[#364e7e1a] max-w-md mx-auto  w-full px-8  py-8 rounded-xl ">
            <h3 className=" font-bold text-red-600 text-xl  ">
              Edit this Task?
            </h3>

            <p className="text-gray-700 font-[600] tracking-wide text-sm pt-6">
              Are you sure you want to Edit this Task?This action will be
              change your task name,task status , task descripton.
            </p>

            <div className=" flex w-full mt-4 items-center justify-center space-x-4 ">
              <button
                onClick={() => {
                  setEditTask(false);
                  setEdit(true);
                  setTypeEdit("edit");
                }}
                className="w-full items-center text-white hover:opacity-75 bg-[#635fc7] py-2 rounded-full"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  setEditTask(false);
                }}
                className="w-full items-center text-[#635fc7] hover:opacity-75 bg-[#635fc71a]  py-2 rounded-full"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default EditTaskpopup;
