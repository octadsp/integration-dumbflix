import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import billImg from "../../../assets/dropdown/billdropdown.png";
import profileImg from "../../../assets/dropdown/profiledropdown.png";
import logoutImg from "../../../assets/dropdown/logoutdropdown.png";
import { useNavigate } from "react-router-dom";
import ImageAvatar from "./ImageAvatar";

function Index({ handleLogout, isMobile }) {
  const [state] = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <>
      {isMobile ? (
        <div className="dropdown dropdown-end">
          <div className="flex items-center mr-8 text-sm font-bold">
            <ImageAvatar
              state={state}
              profileImg={profileImg}
              billImg={billImg}
              navigate={navigate}
              logoutImg={logoutImg}
              handleLogout={handleLogout}
            />
          </div>
        </div>
      ) : (
        <div className="dropdown dropdown-end dropdown-hover">
          <div className="flex items-center mr-8 text-sm font-bold">
            <ImageAvatar
              state={state}
              profileImg={profileImg}
              billImg={billImg}
              navigate={navigate}
              logoutImg={logoutImg}
              handleLogout={handleLogout}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
