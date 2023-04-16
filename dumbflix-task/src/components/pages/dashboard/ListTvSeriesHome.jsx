import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Import useQuery
import { useQuery } from "react-query";

// Import API config
import { API } from "../../../config/api";

const ListTvSeriesHome = () => {
  const navigate = useNavigate();

  let { data: films } = useQuery("filmsCache", async () => {
    const response = await API.get("/films");
    return response.data.data;
  });

  const categoryFilms = films?.filter((film) => film.category_id === 1);

  // const isUserLoggin = JSON.parse(
  //   localStorage.getItem("userLoggedIn")
  // )?.isLoggin;

  // const isLoggin = (each) => {
  //   console.log(isUserLoggin);
  //   if (isUserLoggin) {
  //     navigate(`detail/${each.id}`);
  //   } else {
  //     return document.querySelector("#login").click();
  //   }
  // };

  return (
    <div className="bg-black px-5">
      <h1 className="font-bold text-white text-lg">TV Series</h1>

      <div className="carousel">
        {films?.length !== 0 ? (
          <>
            {categoryFilms?.map((item, index) => (
              <Link
                to={`/film/` + item.id}
                className="carousel-item card-body px-5 cursor-pointer"
              >
                <div className="w-[200px] h-[300px]">
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
            ))}
          </>
        ) : (
          <>
            {categoryFilms?.map((item, index) => (
              <a className="carousel-item card-body px-5 cursor-pointer">
                <div className="w-[200px] h-[300px]"></div>
                <div>
                  <h1 className="mb-3">Movies Not Found</h1>
                  <p></p>
                </div>
              </a>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ListTvSeriesHome;
