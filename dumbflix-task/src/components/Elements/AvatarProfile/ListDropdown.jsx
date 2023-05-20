import React from "react";
import { useLocation } from "react-router-dom";

function ListDropdown(props) {
  const active = useLocation();
  const { profileImg, billImg, navigate, logoutImg, handleLogout } = props;
  return (
    <ul
      tabIndex={0}
      className="dropdown-content menu p-2 shadow bg-light-black-500 rounded-box w-40"
    >
      <li>
        <div>
          <div className="w-6">
            <img src={profileImg}></img>
          </div>
          <a
            className={`${
              active.pathname === "/profile"
                ? "text-white font-bold underline"
                : ""
            }`}
            onClick={() => navigate("/profile")}
          >
            Profile
          </a>
        </div>
        <div>
          <div className="w-6">
            <img src={billImg}></img>
          </div>
          <a
            className={`${
              active.pathname === "/payment"
                ? "text-white font-bold underline"
                : ""
            }`}
            onClick={() => navigate("/payment")}
          >
            Payment
          </a>
        </div>
      </li>

      <hr></hr>

      <li>
        <div>
          <div className="w-6">
            <img src={logoutImg}></img>
          </div>
          <a onClick={handleLogout}>Logout</a>
        </div>
      </li>
    </ul>
  );
}

export default ListDropdown;
