import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import useQuery
import { useQuery } from "react-query";

// Import API config
import { API } from "../../../config/api";

// Import UserContext
import { UserContext } from "../../../context/userContext";
import { useContext } from "react";

const ListMoviesHome = ({ openLoginModal }) => {
  const [state] = useContext(UserContext);

  let { data: films } = useQuery("filmsCache", async () => {
    const response = await API.get("/films");
    return response.data.data;
  });
  
  const categoryFilms = films?.filter((film) => film.category_id === 2);
  console.log(categoryFilms)
  
  const handleWatchNow = () => {
    if (state.user.role === "") {
      return openLoginModal();
    }
  };

  return (
    <div className="bg-black px-5">
      <h1 className="font-bold text-white text-lg">Movies</h1>
      <div className="carousel">
        {categoryFilms?.map((item, index) => (
          <Link
            onClick={handleWatchNow}
            to={`/film/` + item.id}
            className="carousel-item card-body px-5 cursor-pointer"
            key={index}
          >
            <div className="w-[200px] h-[300px]">
              <img className="h-full" src={item.thumbnail} alt={item.title} />
            </div>
            <div>
              <h1 className="mb-3">{item.title}</h1>
              <p>{item.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListMoviesHome;
