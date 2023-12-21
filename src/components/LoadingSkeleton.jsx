

const LoadingSkeleton = () => (
  <div className="flex h-screen bg-white">
    {/* Left side with loading lines */}
    <div className="flex flex-col justify-center items-center p-8 text-white">
      <div className="bg-gray-300 w-[300px] md:w-[500px] h-4 mb-2 animate-pulse"></div>
      <div className="bg-gray-300 w-[150px] md:w-[300px] h-4 mb-4 animate-pulse"></div>
      <div className="bg-gray-300 w-[100px] md:w-20 h-6 rounded-full animate-pulse"></div>
    </div>
  </div>
);

export default LoadingSkeleton;
