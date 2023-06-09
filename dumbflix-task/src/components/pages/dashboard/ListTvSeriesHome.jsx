import { Link } from "react-router-dom";

// Import useQuery
import { useQuery } from "react-query";

// Import API config
import { API } from "../../../config/api";

// Import UserContext
import { UserContext } from "../../../context/userContext";
import { useContext } from "react";
import Login from "../auth_form/login";
import SubscribeModal from "../../modal/subscribeModal";

const ListTvSeriesHome = ({ openLoginModal }) => {
  const [state] = useContext(UserContext);

  console.log(state.user.subscribe);

  let { data: films } = useQuery("filmsCache", async () => {
    const response = await API.get("/films");
    return response.data.data;
  });

  const categoryFilms = films?.filter((film) => film.category_id === 1);

  const handleWatchNow = () => {
    if (state.isLogin === false) {
      return openLoginModal();
    }
  };

  return (
    <div className="bg-black px-5">
      <h1 className="font-bold text-white text-lg">TV Series</h1>
      <Login />
      <div className="carousel">
        {state.isLogin === true
          ? state.user.subscribe === "Active"
            ? categoryFilms?.map((item, index) => (
                <Link
                  to={`/film/` + item.id}
                  className="carousel-item card-body px-5 cursor-pointer"
                  key={index}
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
              ))
            : categoryFilms?.map((item, index) => (
                <>
                  <SubscribeModal />
                  <label
                    htmlFor="my-modal-subscribe"
                    className="carousel-item card-body px-5 cursor-pointer"
                    key={index}
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
                  </label>
                </>
              ))
          : categoryFilms?.map((item, index) => (
              <Link
                onClick={handleWatchNow}
                className="carousel-item card-body px-5 cursor-pointer"
                key={index}
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
      </div>
    </div>
  );
};

export default ListTvSeriesHome;
