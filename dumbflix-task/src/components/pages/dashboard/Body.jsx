import { useNavigate } from "react-router-dom";

const Body = ({ image, title, description, years, category }) => {
  const navigate = useNavigate();

  const isUserLoggin = JSON.parse(
    localStorage.getItem("userLoggedIn")
  )?.isLoggin;

  const isLoggin = (each) => {
    console.log(isUserLoggin);
    if (isUserLoggin) {
      navigate("/detail/12");
    } else {
      return document.querySelector("#login").click();
    }
  };

  return (
    <div className="relative h-[750px]">
      <img src={image} className="w-full object-cover h-[750px] bg-black"></img>
      <div className="bg-gradient-to-t from-black absolute left-0 top-0 drop-shadow-md text-white w-full h-full">
        <div className="ml-32 mt-40 w-2/4">
          <h1 className="text-8xl mb-5">{title}</h1>
          <p className="w-3/4 text-base font-normal mb-3">{description}</p>
          <div className="flex gap-6 mb-12">
            <p>{years}</p>
            <p className="rounded border-2 px-3 border-white">{category}</p>
          </div>
          <a
            onClick={isLoggin}
            className="bg-red-600 px-20 py-5 rounded font-bold cursor-pointer "
          >
            WATCH NOW!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;
