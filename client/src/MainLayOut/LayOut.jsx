import { Outlet } from "react-router";
import Navbar from "../Components/Hero/Navbar";

const LayOut = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-10">
        <Outlet />
      </main>
    </div>
  );
};

export default LayOut;