import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RxCross2 } from "react-icons/rx";

import { useDispatch, useSelector } from "react-redux";
import {
  clearSearchTerm,
  setSearchTerm,
  setPriority,
  setDate,
  clearAll,
} from "../redux/taskSlice";
import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";


const Filter = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.tasks.searchTerm);
  const selectedPriority = useSelector((state) => state.tasks.selectedPriority);
  const selectedDate = useSelector((state) => state.tasks.selectedDate);
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);

  const handleDateChange = (date) => {
    dispatch(setDate(date));
  };

  const handlePriorityChange = (e) => {
    dispatch(setPriority(e.target.value));
  };

  const clearAllFiled = () => {
    dispatch(clearSearchTerm());
    dispatch(setPriority(""));
    dispatch(setDate(""));
  };

    

    const handleDeleteAll = () => {
      setConfirmationOpen(true);
      // You can handle the actual deletion logic here
    };

    const handleCancel = () => {
      setConfirmationOpen(false);
    };

    const handleConfirm = () => {
      // Handle deletion logic here
      dispatch(clearAll());
      setConfirmationOpen(false);
    };

  return (
    <div className="flex justify-center">
      <div className=" w-full md:w-[80%] text-black p-4 rounded-lg shadow-md mb-4">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            placeholder="Search tasks"
            className="border-2  rounded-md p-2 flex-grow"
          />
          <select
            value={selectedPriority}
            onChange={handlePriorityChange}
            className="border-2 text-gray-500 rounded-md p-2"
          >
            <option  value="">Select priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            placeholderText="Select date"
            dateFormat="dd-MM-yyyy"
            className="border-2 rounded-md p-2 focus:outline-none text-black focus:border-blue-500"
            popperPlacement="top-end"
            popperModifiers={{
              offset: {
                enabled: true,
                offset: "-10px, 10px",
              },
              preventOverflow: {
                enabled: true,
                escapeWithReference: false,
                boundariesElement: "viewport",
              },
            }}
          />

          {/* Delete All Button */}
          <button className="relative group">
            <img
              src="https://img.icons8.com/3d-fluency/40/trash.png"
              alt="trash"
              onClick={handleDeleteAll}
              className="relative"
            />
            <span className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs invisible group-hover:visible bg-gray-800 text-white p-1 rounded-md">
              Delete All
            </span>
          </button>

          <button
            className="text-white font-bold bg-red-500 rounded-full py-1 px-1 relative group"
            onClick={clearAllFiled}
          >
            <RxCross2 className="relative" />
            <span className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs invisible group-hover:visible bg-gray-800 text-white p-1 rounded-md">
              Clear Filter
            </span>
          </button>
        </div>
      </div>
      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default Filter;
