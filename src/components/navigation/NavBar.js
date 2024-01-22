import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faCircleDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.navigation.currentPage);

  const goToNextPage = () => {
    dispatch({ type: 'GO_TO_NEXT', payload: 'nextPage' });
  };

  const goToPreviousPage = () => {
    dispatch({ type: 'GO_TO_PREVIOUS', payload: 'previousPage' });
  };

  return (
    <div className="flex rounded p-6 backdrop-blur h-[64px] justify-between font-medium">
      <div className="flex items-center">
        <button
          onClick={goToPreviousPage}
          className=" bg-black w-[32px] h-[32px] rounded-full flex items-center justify-center mr-2"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <span>{currentPage}</span>
        <button
          onClick={goToNextPage}
          className=" bg-black w-[32px] h-[32px] rounded-full flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="flex items-center gap-3">
        <button className=" sm:hidden xs:hidden text-sm text-black bg-white w-[142px] h-[32px] rounded-full hover:scale-110 transform transition-transform duration-300 ease-in-out">
          Explore Premium
        </button>
        <button className=" sm:hidden xs:hidden text-sm text-white bg-gray-800 w-[120px] h-[32px] rounded-full hover:scale-110 transform transition-transform duration-300 ease-in-out">
          <span className=" mr-1">
            <FontAwesomeIcon icon={faCircleDown} />
          </span>
          Install App
        </button>
        <button className=" hover:text-white transition bg-gray-800 rounded-full w-[32px] h-[32px]">
          <FontAwesomeIcon icon={faBell} />
        </button>
        <Link to="/profile">
          <button className=" hover:text-white transition bg-gray-800 rounded-full w-[32px] h-[32px]">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
