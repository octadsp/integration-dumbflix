import React from "react";
import ListDropdown from "./ListDropdown";

function ImageAvatar(props) {
  const { state, profileImg, billImg, navigate, logoutImg, handleLogout } =
    props;
  return (
    <div className="avatar">
      <div className="w-9 rounded-full">
        <label tabIndex={0}>
          <img src={state.user.thumbnail} />
        </label>
        <ListDropdown
          profileImg={profileImg}
          billImg={billImg}
          navigate={navigate}
          logoutImg={logoutImg}
          handleLogout={handleLogout}
        />
      </div>
    </div>
  );
}

export default ImageAvatar;
