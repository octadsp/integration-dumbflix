import ListTvSeries from "../components/pages/dashboard/ListTvSeriesHome";
import ListMovies from "../components/pages/dashboard/ListMoviesHome";
import Navbar from "../components/Navbar";
import Login from "../components/pages/auth_form/Login";
import Register from "../components/pages/auth_form/Register";
import AdminFilm from "./AdminFilm";
import Image from "../assets/witcher.png";
import { useNavigate } from "react-router-dom";

// Import useContext
import { useContext } from "react";

// Import UserContext
import { UserContext } from "../context/userContext";
import Hero from "../components/Hero";

const Home = () => {
  // UserContext
  const [state] = useContext(UserContext);
  const navigate = useNavigate();

  const openLoginModal = () => {
    document.querySelector("#login").click();
  };

  const handleWatchNow = () => {
    if (state.user.role === "user") {
      return navigate("/film/1");
    } else {
      openLoginModal();
    }
  };

  return (
    <>
      {state.isLogin ? (
        state.user.role == "admin" ? (
          <AdminFilm />
        ) : (
          <>
            <Navbar />
            <Hero
              image={Image}
              title={"The Witcher"}
              description={
                "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beast"
              }
              years={"2019"}
              category={"TV Series"}
              handleWatchNow={handleWatchNow}
            />
            <ListTvSeries />
            <ListMovies />
          </>
        )
      ) : (
        <>
          <Navbar />
          <Login />
          <Register />
          <Hero
            image={Image}
            title={"The Witcher"}
            description={
              "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beast"
            }
            years={"2019"}
            category={"TV Series"}
            handleWatchNow={handleWatchNow}
          />
          <ListTvSeries />
          <ListMovies />
        </>
      )}
    </>
  );
};

export default Home;
