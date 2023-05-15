import Navbar from "../components/Navbar";
import ListMovie from "../components/pages/movies/ListMovie";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import MoviesImage from "../assets/image_movies/jokerbanner.png";
import Hero from "../components/Hero";

const Movies = () => {
  const navigate = useNavigate();
  const [state] = useContext(UserContext);

  console.log(state.user);

  const openLoginModal = () => {
    document.querySelector("#login").click();
  };

  const handleWatchNow = () => {
    if (state.user.role === "user") {
      return navigate("/film/2");
    } else {
      openLoginModal();
    }
  };
  return (
    <>
      <Navbar />
      <Hero
        image={MoviesImage}
        title={"Joker"}
        description={
          "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker."
        }
        years={"2019"}
        category={"Movies"}
        handleWatchNow={handleWatchNow}
      />
      <ListMovie />
    </>
  );
};

export default Movies;
