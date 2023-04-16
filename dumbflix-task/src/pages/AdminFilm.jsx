import ListTv from "../components/pages/movies/ListMovie";

import DropArrow from "../assets/dropdown/droparrow.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/pages/Navbar";
import ListMovie from "../components/pages/movies/ListMovie";
import { useState } from "react";

// Import useQuery
import { useQuery } from "react-query";

// Import API config
import { API } from "../config/api";

const AdminFilm = () => {
  const navigate = useNavigate();

  // State Category Change
  const [selectedCategory, setSelectedCategory] = useState("tvseries");

  // Handle on Category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // State Handle Update Film
  const handleEdit = (id) => {
    navigate("/updatefilm/" + id);
  };

  // Fetching data films from database
  let { data: films } = useQuery("filmsCache", async () => {
    const response = await API.get("/films");
    return response.data.data;
  });

  const categoryFilms1 = films?.filter((film) => film.category_id === 1);
  const categoryFilms2 = films?.filter((film) => film.category_id === 2);

  console.log(categoryFilms1);

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-12 bg-black flex justify-between">
        <div className="flex flex-row">
          <h3 className="text-white text-3xl font-bold pl-5 mr-10">
            List Film
          </h3>
          <div className="dropdown flex">
            <div>
              <select
                onChange={handleCategoryChange}
                className="flex flex-row rounded border-2 px-1 border-white m-1 w-28 text-white bg-light-black"
              >
                <option value="tvseries">TV Series</option>
                <option value="movies">Movies</option>
              </select>
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

      <div>
        {selectedCategory === "tvseries" ? (
          <div className="bg-black px-5">
            <h1 className="font-bold text-white text-lg">TV Series</h1>

            <div>
              {films?.length !== 0 ? (
                <div className="grid grid-cols-6 gap-2">
                  {categoryFilms1?.map((item, index) => (
                    <>
                      <div>
                        <Link
                          to={`/filmadmin/${item.id}`}
                          className="card-body px-5"
                        >
                          <div className="w-[200px] h-[300px]" key={index}>
                            <img
                              className="h-full"
                              src={item.thumbnail}
                              alt={item.title}
                            />
                          </div>
                          <div>
                            <h1 className="mb-3">{item.title}</h1>
                            <p>{item.year}</p>
                          </div>
                        </Link>
                        <div>
                          <div className="flex justify-evenly">
                            <button
                              onClick={() => {
                                handleEdit(item.id);
                              }}
                              className="bg-green-500 text-white font-bold rounded px-6"
                            >
                              Edit
                            </button>
                            <button className="bg-red-600 text-white font-bold rounded px-4">
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              ) : (
                <div className="card-body px-5">
                  {films?.map((item, index) => (
                    <>
                      <div className="w-[200px] h-[300px]" key={index}></div>
                      <div>
                        <h1 className="mb-3">Film not found</h1>
                        <p></p>
                      </div>
                    </>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-black px-5">
            <h1 className="font-bold text-white text-lg">Movies</h1>

            <div>
              {films?.length !== 0 ? (
                <div className="grid grid-cols-6 gap-2">
                  {categoryFilms2?.map((item, index) => (
                    <>
                      <div>
                        <Link
                          to={`/filmadmin/${item.id}`}
                          className="card-body px-5"
                        >
                          <div className="w-[200px] h-[300px]" key={index}>
                            <img
                              className="h-full"
                              src={item.thumbnail}
                              alt={item.title}
                            />
                          </div>
                          <div>
                            <h1 className="mb-3">{item.title}</h1>
                            <p>{item.year}</p>
                          </div>
                        </Link>
                        <div>
                          <div className="flex justify-evenly">
                            <button
                              onClick={() => {
                                handleEdit(item.id);
                              }}
                              className="bg-green-500 text-white font-bold rounded px-6"
                            >
                              Edit
                            </button>
                            <button className="bg-red-600 text-white font-bold rounded px-4">
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              ) : (
                <div className="card-body px-5">
                  {films?.map((item, index) => (
                    <>
                      <div className="w-[200px] h-[300px]"></div>
                      <div>
                        <h1 className="mb-3">Film not found</h1>
                        <p></p>
                      </div>
                    </>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminFilm;
