import Body from "../components/pages/dashboard/Body";
import ListTvSeries from "../components/pages/dashboard/ListTvSeriesHome";
import ListMovies from "../components/pages/dashboard/ListMoviesHome";
import Navbar from "../components/pages/Navbar";
import Login from "../components/pages/auth_form/login";
import Register from "../components/pages/auth_form/register";
import AdminFilm from "./AdminFilm";

import Image from "../assets/witcher.png";

// Import useContext
import { useContext } from "react";

// Import UserContext
import { UserContext } from "../context/userContext";

const Home = () => {

  // UserContext
  const [state] = useContext(UserContext);

  return (
    <>
      {state.isLogin ? (
        state.user.role == "admin" ? (
          <AdminFilm />
        ) : (
          <>
          <Navbar />
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
        <Navbar />
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
