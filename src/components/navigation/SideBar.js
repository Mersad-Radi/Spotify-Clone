import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faMusic,
  faPlus,
  faThumbtack,
} from "@fortawesome/free-solid-svg-icons";
import likedSongs from "../../utils/likedSongs.png";

const SideBar = () => {
  return (
    <nav className="SideBar  w-[280px] xs:w-[72px] h-[617px] flex flex-col align-middle  pb-2 pr-3 sticky top-0 z-10">
      <div className="backdrop-blur rounded-xl">
        <Link
          to="/home"
          className=" pl-4 pt-2 pr-3 pb-2 h-14 flex items-center hover:text-white transition  "
        >
          <FontAwesomeIcon
            className="flex align-middle"
            icon={faHouse}
            size="xl"
          />
          <button className=" ml-5 xs:hidden">Home</button>
        </Link>
        <Link
          to="/search"
          className=" pl-4 pt-2 pr-3 pb-2 h-14 flex items-center hover:text-white transition duration-300"
        >
          <FontAwesomeIcon
            className="flex align-middle"
            icon={faMagnifyingGlass}
            size="xl"
          />
          <button className=" ml-5 xs:hidden">Search</button>
        </Link>
      </div>
      <div className="backdrop-blur rounded-xl mt-2 ">
        <div className="flex items-center">
          <button className="pl-4 pt-2 pr-3 pb-2 h-14 flex items-center hover:text-white transition duration-300 ">
            <FontAwesomeIcon
              className="flex align-middle"
              icon={faMusic}
              size="xl"
            />
            <p className=" ml-5 xs:hidden">Your Library</p>
          </button>
        </div>
        <div className="pl-2 pt-2 pr-3 pb-2 h-[435px]">
          <div className="searchContainer xs:hidden pb-6 relative w-[40px] h-[40px] hover:text-white transition duration-300">
            <input
              type="text"
              name="text"
              className="searchInput w-[40px] h-[40px] pl-[40px] outline-none bg-transparent cursor-pointer transition-all ease duration-300 focus:w-[200px] focus:cursor-text focus:bg-[#191a1e] focus:outline-none focus:ring-0 focus:rounded-full"
              required=""
              placeholder="Search in library"
            />
            <div className="searchIcon absolute top-2 left-2 pointer-events-none">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
            </div>
          </div>
          <Link
            to="/likedSongs"
            className="pt-2 pb-2 flex items-center hover:bg-[#22232984] hover:border-[0px] rounded hover:outline-none focus:outline-none hover:border-transparent focus:border-transparent"
          >
            <img className=" rounded w-[50px]" src={likedSongs} />
            <div className="ml-4 flex flex-col xs:hidden">
              <span className=" text-white font-normal">Liked Songs</span>
              <span>
                <FontAwesomeIcon
                  icon={faThumbtack}
                  className=" text-green-500"
                />
                <span className="ml-2 text-sm">Playlist</span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
