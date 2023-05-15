// import ListTv from "../components/pages/movies/ListMovie";

// import DropArrow from "../assets/dropdown/droparrow.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
// import ListMovie from "../components/pages/movies/ListMovie";
// import DeleteFilmModal from "../components/modal/DeleteFilmModal";
import { useEffect, useState } from "react";

// Import react-query
import { useQuery, useMutation } from "react-query";

// Import API config
import { API } from "../config/api";

const AdminFilm = () => {
  const navigate = useNavigate();

  // State Category Change
  const [selectedCategory, setSelectedCategory] = useState("tvseries");

  // Variabel for delete product data
  const [idDelete, setIdDelete] = useState(null);

  // For get id product & show modal confirm delete data
  const handleDelete = (id) => {
    setIdDelete(id);
  };

  // If confirm is true, execute delete data
  const deleteById = useMutation(async (id) => {
    try {
      await API.delete(`/film/${id}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  });

  console.log(idDelete);

  useEffect(() => {
    // execute delete data by id function
    if (idDelete) {
      deleteById.mutate(idDelete);
    }
  }, [idDelete]);

  // Handle on Category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Handle Update Film
  const handleEdit = (id) => {
    navigate("/updatefilm/" + id);
  };

  // Fetching data films from database
  let { data: films, refetch } = useQuery("filmsCache", async () => {
    const response = await API.get("/films");
    return response.data.data;
  });

  const categoryFilms1 = films?.filter((film) => film.category_id === 1);
  const categoryFilms2 = films?.filter((film) => film.category_id === 2);

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
          <Link
            to={"/addfilm"}
            className="bg-red-700 text-white px-14 py-2 rounded cursor-pointer mr-10"
          >
            Add Film
          </Link>
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
                      <div className="flex flex-col items-center" key={index}>
                        <Link
                          to={`/filmadmin/${item.id}`}
                          className="card-body p-2"
                        >
                          <div className="w-full h-72">
                            <img
                              className="h-full object-cover"
                              src={item.thumbnail}
                              alt={item.title}
                            />
                          </div>
                          <div>
                            <h1 className="mb-3">{item.title}</h1>
                            <p>{item.year}</p>
                          </div>
                        </Link>
                        <div className="mt-2">
                          <div className="">
                            <label
                              onClick={() => {
                                handleEdit(item.id);
                              }}
                              className="btn btn-sm bg-green-500 mr-2 text-white font-bold rounded px-6"
                            >
                              Edit
                            </label>
                            <button
                              onClick={() => {
                                handleDelete(item.id);
                              }}
                              htmlFor="my-modal"
                              className="btn btn-sm bg-red-600 text-white font-bold rounded"
                            >
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
                      <div className="flex flex-col items-center" key={index}>
                        <Link
                          to={`/filmadmin/${item.id}`}
                          className="card-body p-2"
                        >
                          <div className="w-full h-72">
                            <img
                              className="h-full object-cover"
                              src={item.thumbnail}
                              alt={item.title}
                            />
                          </div>
                          <div>
                            <h1 className="mb-3">{item.title}</h1>
                            <p>{item.year}</p>
                          </div>
                        </Link>
                        <div className="mt-2">
                          <div className="">
                            <label
                              onClick={() => {
                                handleEdit(item.id);
                              }}
                              className="btn btn-sm bg-green-500 mr-2 text-white font-bold rounded px-6"
                            >
                              Edit
                            </label>
                            <button
                              onClick={() => {
                                handleDelete(item.id);
                              }}
                              htmlFor="my-modal"
                              className="btn btn-sm bg-red-600 text-white font-bold rounded"
                            >
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
        )}
      </div>
    </>
  );
};

export default AdminFilm;
