import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { v4 as uuidv4 } from "uuid";

/* eslint-disable react/prop-types */
const AddTask = ({ onClose }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("");

  const dispatch = useDispatch();

  const uniqueId = uuidv4();

  //! Submit form
  const sumbitHandler = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: uniqueId, task, description, date, priority }));
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center  bg-opacity-80">
      <div className="bg-gradient-to-r relative from-blue-500 z-50 to-teal-500 bg-opacity-80  text-black p-8 rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add Task</h2>
        <span className="absolute top-3 right-3 cursor-pointer">
          <img
            src="https://img.icons8.com/ios-glyphs/30/macos-close.png"
            alt=""
            onClick={onClose}
          />
        </span>
        <form onSubmit={sumbitHandler}>
          <div className="mb-4 flex">
            <div className="mr-2 w-1/2">
              <label
                htmlFor="task"
                className="block text-sm font-medium text-gray-700"
              >
                Task
              </label>
              <input
                type="text"
                id="task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
                autoFocus
                className="border-2 rounded-md w-full p-2"
                placeholder="Enter task"
              />
            </div>
            <div className="ml-2 w-1/2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <input
                id="description"
                className="border-2 rounded-md w-full p-2"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border-2 rounded-md w-full p-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-gray-700"
            >
              Priority
            </label>
            <select
              id="priority"
              className="border-2 rounded-md w-full p-2"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="">Select Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 bg-gradient-to-r from-red-400 to-pink-400 text-white px-4 py-2 rounded-md hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 transition duration-300"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-teal-400 text-white px-4 py-2 rounded-md hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 transition duration-300"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddTask;
