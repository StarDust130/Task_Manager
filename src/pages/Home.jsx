import { Link } from "react-router-dom";

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url("https://4xwallpapers.com/wp-content/uploads/2023/05/anime-boy-wallpaper.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    color: "black",
  };

  return (
    <div
      style={backgroundStyle}
      className="bg-contain md:bg-cover flex items-center justify-start"
    >
      <div className="text-left px-8">
        <h1 className="text-3xl  font-extrabold mb-4 leading-tight">
          Welcome to Our Awesome Task Manager Website
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover the best way to manage your tasks with us!
        </p>
        <Link to="/list">
          <button className=" md:ml-32 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            Check it out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
