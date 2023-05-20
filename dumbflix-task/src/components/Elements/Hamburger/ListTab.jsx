import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ListTab() {
  const navigate = useNavigate();
  const active = useLocation();
  return (
    <ul
      tabIndex={0}
      className="dropdown-content menu mt-2 p-2 shadow bg-light-black-500 rounded-box w-40 text-slate-300 font-bold"
    >
      <li>
        <a
          className={` ${active.pathname === "/" ? "text-red-600 underline" : ""}`}
          onClick={() => navigate("/")}
        >
          Home
        </a>
      </li>
      <li>
        <a
          className={`${active.pathname === "/tvshow" ? "text-red-600 underline" : ""}`}
          onClick={() => navigate("/tvshow")}
        >
          TV Shows
        </a>
      </li>
      <li>
        <a
          className={`${active.pathname === "/movies" ? "text-red-600 underline" : ""}`}
          onClick={() => navigate("/movies")}
        >
          Movies
        </a>
      </li>
    </ul>
  );
}

export default ListTab;
