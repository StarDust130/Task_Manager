// Home.js
import { Suspense, lazy } from "react";
import LoadingSkeleton from "../components/LoadingSkeleton";

const LazyBackground = lazy(() => import("../components/LazyImg"));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<LoadingSkeleton />}>
        <LazyBackground />
      </Suspense>
    </div>
  );
};

export default Home;
