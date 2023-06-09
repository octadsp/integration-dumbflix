import NotFound from "../../../assets/404.jpg";

// Import useQuery
import { useQuery } from "react-query";

// Import API config
import { API } from "../../../config/api";
import { Link } from "react-router-dom";

const ListMovie = () => {
  // Fetching data films from database
  let { data: films } = useQuery("filmsCache", async () => {
    const response = await API.get("/films");
    return response.data.data;
  });

  const categoryFilms = films?.filter((film) => film.category_id === 2);

  return (
    <div className="bg-black px-5">
      <h1 className="font-bold text-white text-lg">Movies</h1>
      <div>
        <div className="grid grid-cols-6 gap-2">
          {categoryFilms?.map((item, index) => (
            <>
              <Link to={`/film/` + item.id} className="card-body px-5">
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
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListMovie;
