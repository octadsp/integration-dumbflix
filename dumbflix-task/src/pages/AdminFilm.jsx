import ListTv from "../components/pages/movies/ListMovie";

import DropArrow from "../assets/dropdown/droparrow.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/pages/Navbar";
import ListMovie from "../components/pages/movies/ListMovie";

const AdminFilm = () => {
  const navigate = useNavigate();

  return (
    <>
    <Navbar />
      <div></div>
      <div className="pt-24 pb-12 bg-black flex justify-between">
        <div className="flex flex-row">
          <h3 className="text-white text-3xl font-bold pl-5 mr-10">
            List Film
          </h3>
          <div className="dropdown flex">
            <label
              tabIndex={0}
              className="flex flex-row rounded border-2 px-3 border-white m-1 w-28"
            >
              Category
              <img className="h-4 pt-2 pl-2" src={DropArrow} />
            </label>
            <div>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-light-black rounded-box w-52"
              >
                <li>
                  <a>TV Series</a>
                </li>
                <li>
                  <a>Movies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex">
          <a
            onClick={() => navigate("/addfilm")}
            className="bg-red-700 text-white px-14 py-2 rounded cursor-pointer mr-10"
          >
            Add Film
          </a>
        </div>
      </div>
      <ListMovie />
    </>
  );
};

export default AdminFilm;
