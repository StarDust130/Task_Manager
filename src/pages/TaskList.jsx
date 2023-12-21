import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { removeTask, toogleTask, updateTask } from "../redux/taskSlice";
import { useState } from "react";
import { TbBulbFilled } from "react-icons/tb";
import { TbBulbOff } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";
import Filter from "../components/Filter";
import { format } from "date-fns";

const TaskList = () => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedDate, setEditedDate] = useState("");
  const [editedPriority, setEditedPriority] = useState("");
  const [blubOn, setBlubOn] = useState(true);
  const tasks = useSelector((state) => state.tasks.tasks);
  const selectedPriority = useSelector((state) => state.tasks.selectedPriority);
  const selectedDate = useSelector((state) => state.tasks.selectedDate);
  const searchTerm = useSelector((state) => state.tasks.searchTerm);

  // !Filter tasks based on selectedPriority, selectedDate, and searchTerm
  const filteredTasks = tasks.filter((task) => {
    const priorityMatch =
      !selectedPriority || task.priority === selectedPriority;

    const taskDate = new Date(task.date);
    const dateMatch =
      !selectedDate ||
      (taskDate.getFullYear() === selectedDate.getFullYear() &&
        taskDate.getMonth() === selectedDate.getMonth() &&
        taskDate.getDate() === selectedDate.getDate());

    const searchTermMatch =
      !searchTerm || task.task.toLowerCase().includes(searchTerm.toLowerCase());

    return priorityMatch && dateMatch && searchTermMatch;
  });

  const handleEditClick = (taskId, taskText, description, date, priority) => {
    setEditMode(taskId);
    setEditedTask(taskText);
    setEditedDescription(description);
    setEditedDate(date);
    setEditedPriority(priority);
  };

  const handleEditSave = () => {
    dispatch(
      updateTask({
        id: editMode,
        task: editedTask,
        description: editedDescription,
        date: editedDate,
        priority: editedPriority,
      })
    );
    setEditMode(null);
  };

  const randomBg = () => {
    const colors = [
      "bg-gradient-to-r from-green-300 to-purple-400",
      "bg-gradient-to-r from-red-200 via-yellow-200 to-green-100",
      "bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500",
      "bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400",
      "bg-gradient-to-r from-green-200 via-green-300 to-green-400",
      "bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400",
      "bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400",
      "bg-gradient-to-r from-orange-200 via-orange-300 to-orange-400",
      "bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-400",
      "bg-gradient-to-r from-teal-200 via-teal-300 to-teal-400",
      // Add more as needed
    ];
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
  };

  return (
    <div className="container mx-auto  overflow-hidden mt-8 mb-40">
      <h1 className="text-3xl font-semibold mb-6">Task List</h1>
      {tasks.length > 0 && <Filter />}

      {tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-semibold mt-10 mb-6 text-gray-800">
            Enter a Task to Get Started!
          </h1>
          <p className="text-gray-600 mb-4">
            Click on the (+) icon to add a new task and get organized.
          </p>
          <img
            src="https://niceillustrations.com/wp-content/uploads/2022/12/cartoon-newspaper.png"
            alt="No Results Found"
            className="w-64 h-64 rounded-full shadow-lg"
          />
        </div>
      ) : (
        <div className="flex flex-wrap  justify-center gap-4 ">
          {filteredTasks.length === 0 && (
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl mt-16 font-semibold mb-6 text-gray-800">
                No Tasks Found
              </h1>
              <img
                src="https://niceillustrations.com/wp-content/uploads/2022/11/cartoon-no-results-found.png"
                alt="No Results Found"
                className="bg-cover w-64 h-64 rounded-full shadow-lg "
              />
            </div>
          )}
          {filteredTasks.map((task, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 mb-5">
              <div
                className={`
        ${
          task.completed
            ? "bg-slate-400 text-white  border-2 border-gray-700 shadow-md shadow-gray-500"
            : blubOn
            ? randomBg()
            : "bg-gray-500 text-white"
        } text-black p-6 cursor-pointer rounded-lg shadow-md
        transition-transform transform ${
          task.completed ? "" : "hover:scale-105 hover:shadow-lg"
        } relative z-0
      `}
              >
                {editMode === task.id ? (
                  <>
                    {/* Edit Box */}
                    <h2 className="text-xl font-bold mb-4">Edit Task</h2>
                    <input
                      type="text"
                      value={editedTask}
                      onChange={(e) => setEditedTask(e.target.value)}
                      className="border-2 rounded-md w-full p-2 mb-2"
                      placeholder="Enter task"
                    />
                    <textarea
                      value={editedDescription}
                      onChange={(e) => setEditedDescription(e.target.value)}
                      className="border-2 rounded-md w-full p-2 mb-2"
                      placeholder="Enter task description"
                    />
                    <input
                      type="date"
                      value={editedDate}
                      onChange={(e) => setEditedDate(e.target.value)}
                      className="border-2 rounded-md w-full p-2 mb-2"
                    />
                    <select
                      value={editedPriority}
                      onChange={(e) => setEditedPriority(e.target.value)}
                      className="border-2 rounded-md w-full p-2 mb-2"
                    >
                      <option value="">Select priority</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </>
                ) : (
                  <>
                    {/* Cards */}
                    <div
                      className={`title ${
                        task.completed ? "line-through " : ""
                      }`}
                    >
                      <h2 className="text-xl font-bold mb-4">{task.task}</h2>
                      <div className="flex justify-start w-full">
                        <p className="text-gray-600 mb-4">{task.description}</p>
                      </div>
                      <p className="text-sm">
                        {task.date && !isNaN(new Date(task.date))
                          ? format(new Date(task.date), "dd-MM-yyyy")
                          : ""}
                      </p>
                      <p className="text-sm">{task.priority}</p>
                    </div>
                  </>
                )}

                <div className="flex justify-between items-center text-gray-700">
                  <div className="flex items-center space-x-2">
                    {/* Toggle */}
                    {task.completed ? (
                      <>
                        <FaUndoAlt
                          onClick={() => dispatch(toogleTask({ id: task.id }))}
                          className="text-black hover:text-gray-900"
                        />
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          className="cursor-pointer text-red-500 hover:text-red-700"
                          onClick={() => dispatch(removeTask({ id: task.id }))}
                        />
                      </>
                    ) : (
                      <FaCheckCircle
                        onClick={() => dispatch(toogleTask({ id: task.id }))}
                        className="text-green-500 hover:text-green-700"
                      />
                    )}

                    {!task.completed && (
                      <>
                        {editMode === task.id ? (
                          <button
                            className="text-blue-500 font-bold hover:text-blue-700"
                            onClick={handleEditSave}
                          >
                            Save
                          </button>
                        ) : (
                          <FontAwesomeIcon
                            icon={faEdit}
                            className="cursor-pointer text-blue-500 hover:text-blue-700"
                            onClick={() =>
                              handleEditClick(
                                task.id,
                                task.task,
                                task.description,
                                task.date,
                                task.priority
                              )
                            }
                          />
                        )}
                        {/* Delete */}
                        {!task.completed && (
                          <FontAwesomeIcon
                            icon={faTrashAlt}
                            className="cursor-pointer text-red-500 hover:text-red-700"
                            onClick={() =>
                              dispatch(removeTask({ id: task.id }))
                            }
                          />
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tasks.length > 0 && (
        <>
          {blubOn ? (
            <>
              {" "}
              <div className="absolute top-8 right-3  md:top-10  md:right-10">
                <span className="relative group">
                  <TbBulbFilled
                    size={30}
                    onClick={() => setBlubOn(false)}
                    className="text-yellow-500 cursor-pointer"
                  />
                  <span
                    className={`absolute top-[40px] text-sm ${randomBg()} text-black text-semibold py-1 px-1  rounded-md left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    Disabled Gradient
                  </span>
                </span>
              </div>{" "}
            </>
          ) : (
            <div className="absolute top-8 right-3  md:top-10  md:right-10">
              <span className="relative group">
                <TbBulbOff
                  size={30}
                  onClick={() => setBlubOn(true)}
                  className="text-gray-500 cursor-pointer"
                />
                <span
                  className={`absolute top-[40px] text-sm bg-gray-700 py-1 px-1  rounded-md left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  Enable Gradient
                </span>
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TaskList;
