import React from "react";

function Hero(props) {
  return (
    <div className="relative h-[750px]">
      <img
        src={props.image}
        className="w-full object-cover h-[750px] bg-black"
      ></img>
      <div className="bg-gradient-to-t from-black absolute left-0 top-0 drop-shadow-md text-white w-full h-full">
        <div className="ml-32 mt-40 w-2/4">
          <h1 className="text-8xl mb-5">{props.title}</h1>
          <p className="w-3/4 text-base font-normal mb-3">
            {props.description}
          </p>
          <div className="flex gap-6 mb-12">
            <p>{props.years}</p>
            <p className="rounded border-2 px-3 border-white">
              {props.category}
            </p>
          </div>
          <button
            onClick={props.handleWatchNow}
            className="btn btn-2xl bg-red-600 px-20 text-white rounded font-bold"
          >
            WATCH NOW!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
