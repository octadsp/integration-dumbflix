import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ListNavbar() {
  const navigate = useNavigate();
  const active = useLocation();
  return (
    <ul className="flex flex-row gap-6 ml-7 text-white text-center text-sm font-bold cursor-pointer">
      <li>
        <a
          className={`hover:underline hover:text-red-800 ${
            active.pathname === "/" ? "text-red-600" : ""
          }`}
          onClick={() => navigate("/")}
        >
          Home
        </a>
      </li>
      <li>
        <a
          className={`hover:underline hover:text-red-800 ${
            active.pathname === "/tvshow" ? "text-red-600" : ""
          }`}
          onClick={() => navigate("/tvshow")}
        >
          TV Shows
        </a>
      </li>
      <li>
        <a
          className={`hover:underline hover:text-red-800 ${
            active.pathname === "/movies" ? "text-red-600" : ""
          }`}
          onClick={() => navigate("/movies")}
        >
          Movies
        </a>
      </li>
    </ul>
  );
}

export default ListNavbar;
