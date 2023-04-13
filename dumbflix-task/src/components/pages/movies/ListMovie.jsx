import { useEffect, useState } from "react";

export default function ListMovie() {
  const [dataMovieList, setDataMovieList] = useState();

  useEffect(() => {
    fetch(`https://api.npoint.io/4a8891249c5a1195708d`)
      .then((response) => response.json())
      .then((json) => {
        setDataMovieList(json);
      });

    return () => {
      setDataMovieList(null);
    };
  }, []);

  return (
    <div className="bg-black px-5">
      <h1 className="font-bold text-white text-lg">Movies</h1>

      <div className="grid grid-cols-6 gap-2">
        {dataMovieList &&
          dataMovieList.map((each) => (
            // Tambahhin a untuk navigate ke /detail/${id}
            <div className="card-body px-5">
              <div className="w-[200px] h-[300px]">
                <img className="h-full" src={each.moviecard} alt="Burger" />
              </div>
              <div>
                <h1 className="mb-3">{each.title}</h1>
                <p>{each.years}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
