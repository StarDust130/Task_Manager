import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { useState } from "react";
import AddTask from "../pages/AddTask";

const NavBar = () => {
  const [isTaskFormOpen, setTaskFormOpen] = useState(false);

  const openTaskForm = () => {
    setTaskFormOpen(true);
  };

  const closeTaskForm = () => {
    setTaskFormOpen(false);
  };

  return (
    <>
      <nav className="fixed bottom-10 left-1/2 transform -translate-x-1/2 p-2 px-6 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white bg-opacity-75 backdrop-blur-md z-50  py-2 flex items-center justify-center gap-4">
        {/* Home Button */}
        <div className="relative group">
          <Link to="/">
            <IoMdHome
              className="text-gray-300 transition duration-300 group-hover:text-gray-400"
              size="1.5em"
            />
            <span className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs invisible group-hover:visible bg-gray-800 text-white p-1 rounded-md">
              Home
            </span>
          </Link>
        </div>
        {/* List Button */}
        <div className="relative group">
          <Link to="/list">
            <CiViewList
              className="text-gray-300 transition duration-300 group-hover:text-gray-400"
              size="1.5em"
            />
          </Link>
          <span className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs invisible group-hover:visible bg-gray-800 text-white p-1 rounded-md">
            List
          </span>
        </div>

        {/* Add Button */}
        <div className="relative group">
          <Link to="/list">
            <IoAddCircleSharp
              className="text-gray-300 transition duration-300 group-hover:text-gray-400"
              size="2em"
              onClick={openTaskForm}
            />
          </Link>
          <span className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs invisible group-hover:visible bg-gray-800 text-white px-2 py-1 rounded-md">
            Add Task
          </span>
        </div>

        {/* Github Button */}
        <div className="relative group">
          <a
            href="https://github.com/StarDust130"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition duration-300 group-hover:text-gray-400"
          >
            <FaGithub size="1.5em" />
          </a>
          <span className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs invisible group-hover:visible bg-gray-800 text-white p-1 rounded-md">
            Github
          </span>
        </div>
        {/* Profile Button */}
        <div className="relative group">
          <a
            href="https://stardust130.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition duration-300 group-hover:text-gray-400"
          >
            <CgWebsite size="1.5em" />
          </a>
          <span className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs invisible group-hover:visible bg-gray-800 text-white p-1 rounded-md">
            My Website
          </span>
        </div>
      </nav>

      {/* Task Form Modal */}
      {isTaskFormOpen && (
        <div className="absolute z-50 top-0 left-0 w-full h-full flex items-center justify-center  bg-opacity-80 bg-black">
          <AddTask onClose={closeTaskForm} />
        </div>
      )}
    </>
  );
};

export default NavBar;
