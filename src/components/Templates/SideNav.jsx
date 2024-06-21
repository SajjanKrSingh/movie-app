import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <div className="lg:w-[25%] w-[30%] h-full border-r-2 border-zinc-400 p-10">
        <h1 className="text-xl text-white">
          <i className="mr-2 text-[#6556CD] ri-tv-2-fill"></i>
          <span className="">Movie App</span>
        </h1>
        <nav className="flex flex-col gap-3 text-zinc-400 text-medium">
          <h1 className="text-xl font-semibold text-white mt-10 mb-5">
            New feeds
          </h1>
          <Link className="hover:bg-[#6556CD]  p-4 hover:text-white rounded-md duration-300 ">
            Trending
          </Link>
          <Link className="hover:bg-[#6556CD] p-4 hover:text-white rounded-md duration-300 ">
            Popular
          </Link>
          <Link className="hover:bg-[#6556CD] p-4 hover:text-white rounded-md duration-300 ">
            Movies
          </Link>
          <Link className="hover:bg-[#6556CD] p-4 hover:text-white rounded-md duration-300 ">
            Tv Shows
          </Link>
          <Link className="hover:bg-[#6556CD] p-4 hover:text-white rounded-md duration-300 ">
            People
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SideNav;
