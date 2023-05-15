import Navbar from "../components/Navbar";
import ListTv from "../components/pages/tv_shows/ListTv";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import ImageShows from "../assets/tv_series/moneyBanner.png";
import Hero from "../components/Hero";

const TvSeries = () => {
  const navigate = useNavigate();
  const [state] = useContext(UserContext);

  console.log(state.user);

  const openLoginModal = () => {
    document.querySelector("#login").click();
  };

  const handleWatchNow = () => {
    if (state.user.role === "user") {
      return navigate("/film/3");
    } else {
      openLoginModal();
    }
  };
  return (
    <>
      <Navbar />
      <Hero
        image={ImageShows}
        title={"La Casa De Papel"}
        description={
          'Money Heist is a crime drama on Netflix - originally called La Casa de Papel. Money Heist season 3 has just been released by the streaming service. The plot reads: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.'
        }
        years={"2019"}
        category={"TV Series"}
        handleWatchNow={handleWatchNow}
      />
      <ListTv />
    </>
  );
};

export default TvSeries;
