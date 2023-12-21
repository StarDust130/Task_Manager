import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchTerm, setSearchTerm } from "../redux/taskSlice";

const Filter = () => {
    // const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPriority, setSelectedPriority] = useState("");

  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.tasks.searchTerm);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePriorityChange = (e) => {
    setSelectedPriority(e.target.value);
  };

  const clearAll = () => {
    setSelectedDate(null);
    setSelectedPriority("");
    dispatch(clearSearchTerm());
  };
  console.log(searchTerm);

  return (
    <div className="flex justify-center">
      <div className="bg-white w-full md:w-[80%] text-black p-4 rounded-lg shadow-md mb-4">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            placeholder="Search tasks"
            className="border-2 rounded-md p-2 flex-grow"
          />
          <select
            value={selectedPriority}
            onChange={handlePriorityChange}
            className="border-2 rounded-md p-2"
          >
            <option value="">Select priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            placeholderText="Select date"
            className="border-2 rounded-md p-2 focus:outline-none focus:border-blue-500"
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
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
            onClick={clearAll}
          >
            Clear All
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
