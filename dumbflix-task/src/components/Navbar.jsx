import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import logo from "../assets/logo.png";
import filmImg from "../assets/dropdown/filmdropdown.png";
import billImg from "../assets/dropdown/billdropdown.png";
import profileImg from "../assets/dropdown/profiledropdown.png";
import logoutImg from "../assets/dropdown/logoutdropdown.png";

// Import UserContext
import { UserContext } from "../context/userContext";

const Navbar = () => {
  const navigate = useNavigate();

  // UserContext
  const [state] = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("token");

    //Reload Page
    window.location.reload();

    navigate("/");
  };

  return (
    <nav className="fixed left-0 right-0 z-10">
      <div className="flex justify-between items-center bg-light-black py-3">
        {state.isLogin ? (
          state.user.role == "admin" ? (
            <Link to={"/transaction"} className="pl-5">
              <img className="w-24" src={logo} />
            </Link>
          ) : (
            <>
              <div>
                <ul className="flex flex-row gap-6 ml-7 text-white text-center text-sm font-bold cursor-pointer">
                  <li>
                    <a onClick={() => navigate("/")}>Home</a>
                  </li>
                  <li>
                    <a onClick={() => navigate("/tvshow")}>TV Shows</a>
                  </li>
                  <li>
                    <a onClick={() => navigate("/movies")}>Movies</a>
                  </li>
                </ul>
              </div>

              <div>
                <img className="w-24" src={logo} />
              </div>
            </>
          )
        ) : (
          <>
            <div>
              <ul className="flex flex-row gap-6 ml-7 text-white text-center text-sm font-bold hover:underline hover:text-red-600">
                <li>
                  <a onClick={() => navigate("/")} className="cursor-pointer">
                    Home
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <img className="w-24" src={logo} />
            </div>
          </>
        )}

        {state.isLogin ? (
          state.user.role == "admin" ? (
            <>
              <div className="dropdown dropdown-end dropdown-hover">
                <div className="flex items-center mr-8 text-sm font-bold">
                  <div className="avatar">
                    <div className="w-7 rounded-full">
                      <label tabIndex={0}>
                        <img src={state.user.thumbnail} />
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-light-black rounded-box w-44"
                      >
                        <li>
                          <div>
                            <div className="w-6">
                              <img src={filmImg}></img>
                            </div>
                            <Link to={"/"}>Film</Link>
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
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="dropdown dropdown-end dropdown-hover">
                <div className="flex items-center mr-8 text-sm font-bold">
                  <div className="avatar">
                    <div className="w-7 rounded-full">
                      <label tabIndex={0}>
                        <img src={state.user.thumbnail} />
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-light-black rounded-box w-44"
                      >
                        <li>
                          <div>
                            <div className="w-6">
                              <img src={profileImg}></img>
                            </div>
                            <a onClick={() => navigate("/profile")}>Profile</a>
                          </div>
                          <div>
                            <div className="w-6">
                              <img src={billImg}></img>
                            </div>
                            <a onClick={() => navigate("/payment")}>Payment</a>
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
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        ) : (
          <>
            <div className="flex items-center mr-8 text-sm font-bold">
              <label
                htmlFor="my-modal-register"
                id="register"
                className="btn btn-sm font-bold rounded bg-white text-red-600 px-5 mr-4 hover:ring-1 hover:ring-red-600"
              >
                Register
              </label>
              <label
                htmlFor="my-modal-login"
                id="login"
                className="btn btn-sm font-bold rounded bg-red-600 text-white px-7 hover:ring-1 hover:ring-white"
              >
                Login
              </label>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
