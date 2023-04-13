import Body from "../components/pages/dashboard/Body";
import ListTvSeries from "../components/pages/dashboard/ListTvSeriesHome";
import ListMovies from "../components/pages/dashboard/ListMoviesHome";
import Navbar from "../components/pages/Navbar";
import Login from "../components/pages/auth_form/login";
import Register from "../components/pages/auth_form/register";
import AdminFilm from "./AdminFilm";

import Image from "../assets/witcher.png";

const Home = () => {
  const isLogginUser = JSON.parse(
    localStorage.getItem("userLoggedIn")
  )?.isLoggin;

  const isAdmin =
    JSON.parse(localStorage.getItem("userLoggedIn"))?.roles == "admin";

  return (
    <>
      {isLogginUser ? (
        isAdmin ? (
          <AdminFilm />
        ) : (
          <>
            <Body
              image={Image}
              title={"The Witcher"}
              description={
                "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beast"
              }
              years={"2019"}
              category={"TV Series"}
            />
            <ListTvSeries />
            <ListMovies />
          </>
        )
      ) : (
        <>
          <Login />
          <Register />
          <Body
            image={Image}
            title={"The Witcher"}
            description={
              "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beast"
            }
            years={"2019"}
            category={"TV Series"}
          />
          <ListTvSeries />
          <ListMovies />
        </>
      )}
    </>
  );
};

export default Home;
