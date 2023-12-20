import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src={
          "https://static.semrush.com/blog/uploads/files/7a/c4/7ac4acca6898c1bb4781b64dd751a8df/what-does-error-404-not-found-mean.svg"
        }
        alt="404 Not Found"
        className="mb-8"
      />
      <p className="text-2xl font-bold text-gray-800">Oops! Page Not Found</p>
      <p className="text-gray-600">
        The page you are looking for might be in another galaxy.
      </p>
      <Link to="/"
      >
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
