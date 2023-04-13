import { useRef, useState } from "react";
import Navbar from "../components/pages/Navbar";

import AttachImg from "../assets/attach.png";

const AddFilm = () => {
  const [getRowFilm, setRowFilm] = useState(0);

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleAddForm = {};
  return (
    <>
      <div className="flex flex-col w-3/4 mx-auto pt-14">
        <div className="py-7 text-xl font-bold text-white">
          <h1>ADD FILM</h1>
        </div>

        <div>
          <div className="flex flex-row gap-4">
            <input
              type="text"
              placeholder="Title"
              className="input input-border ring-1 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-full mb-6"
            />
            <a className="">
              <input
                ref={fileInputRef}
                type="file"
                hidden
                className="file-input file-input-bordered w-full max-w-xs bg-white file:-order-none"
              />
              <button
                onClick={handleButtonClick}
                className="flex bg-neutral-600 ring-1 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white font-bold w-44 py-3 px-1 rounded"
              >
                Attache Thumbnail
                <img className="w-4 ml-2" src={AttachImg}></img>
              </button>
            </a>
          </div>

          <div>
            <input
              type="text"
              placeholder="Year"
              className="input input-border ring-1 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-full mb-6"
            />
          </div>

          <div>
            <select
              name="gender"
              className="input input-border ring-2 ring-white hover:ring-cyan-500 focus:ring-cyan-500 bg-neutral-600 w-full mb-6"
            >
              <option className="hidden" value="default">
                Category
              </option>
              <option>TV Series</option>
              <option>Movies</option>
            </select>
          </div>

          <div>
            <textarea
              type="text"
              style={{ resize: "none" }}
              placeholder="Description"
              className="input input-border ring-1 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-full h-36 mb-6"
            />
          </div>

          <div>
            <div className="flex flex-row gap-4">
              <input
                type="text"
                placeholder="Title Episode"
                className="input input-border ring-1 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-full mb-6"
              />
              <a className="">
                <input
                  ref={fileInputRef}
                  type="file"
                  hidden
                  className="file-input file-input-bordered w-full max-w-xs bg-white file:-order-none"
                />
                <button
                  onClick={handleButtonClick}
                  className="flex bg-neutral-600 ring-1 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white font-bold w-44 py-3 px-1 rounded"
                >
                  Attache Thumbnail
                  <img className="w-4 ml-2" src={AttachImg}></img>
                </button>
              </a>
            </div>

            <div>
              <input
                type="text"
                placeholder="Link Film"
                className="input input-border ring-1 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-full mb-6"
              />
            </div>

            <div className="input input-border ring-1 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-red-600 flex">
              <a className="w-full h-full text-2xl mt-1 flex justify-center cursor-pointer">
                +
              </a>
            </div>
          </div>

          <div className="w-full flex justify-end text-white">
            <div className="w-44 mt-6">
              <a className="bg-red-600 flex justify-center rounded py-1">
                Save
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFilm;
