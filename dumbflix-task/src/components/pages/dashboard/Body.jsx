import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import Hero from "../../Hero";

const Body = ({ image, title, description, years, category }) => {
  const navigate = useNavigate();
  const [state] = useContext(UserContext);

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
    <Hero
      image={image}
      title={title}
      description={description}
      years={years}
      category={category}
      handleWatchNow={handleWatchNow}
    />
  );
};

export default Body;
