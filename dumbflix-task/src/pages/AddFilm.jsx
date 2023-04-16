import { useEffect, useRef, useState } from "react";
import Navbar from "../components/pages/Navbar";

import AttachImg from "../assets/attach.png";

// Import API config
import { API } from "../config/api";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const AddFilm = () => {
  const navigate = useNavigate();

  const [getRowFilm, setRowFilm] = useState(0);

  const fileInputRef = useRef(null);

  // State for categories
  const [categories, setCategories] = useState([]);

  // State for storing some data
  const [preview, setPreview] = useState(null); //For thumbnail preview
  const [getFormFilm, setFormFilm] = useState({
    title: "",
    thumbnail: "",
    year: "",
    category_id: "",
    description: "",
  });

  // Fetching Category data
  const getCategories = async () => {
    try {
      const response = await API.get("/categories");
      setCategories(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Handle change data on form
  const handleChange = (e) => {
    setFormFilm({
      ...getFormFilm,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create thumbnail url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleAddForm = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      // Store data with FormData as object
      const formData = new FormData();
      formData.set("title", getFormFilm.title);
      formData.set(
        "thumbnail",
        getFormFilm.thumbnail[0],
        getFormFilm.thumbnail[0].name
      );
      formData.set("year", getFormFilm.year);
      formData.set("description", getFormFilm.description);
      formData.set("category_id", Number(getFormFilm.category_id));

      // Insert product data
      const response = await API.post("/film", formData, config);
      console.log("add product success : ", response);
      navigate("/admin");
    } catch (error) {
      console.log("add product failed : ", error);
      console.log(getFormFilm);
    }
  });

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-3/4 mx-auto pt-14">
        <div className="py-7 text-xl font-bold text-white">
          <h1>ADD FILM</h1>
        </div>

        <form onSubmit={(e) => handleAddForm.mutate(e)}>
          <div className="flex flex-row gap-4">
            <input
              onChange={handleChange}
              id="title"
              name="title"
              form="title"
              type="text"
              placeholder="Title"
              className="input input-border ring-1 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-full mb-6"
            />
            <a className="">
              <input
                onChange={handleChange}
                id="thumbnail"
                name="thumbnail"
                form="thumbnail"
                ref={fileInputRef}
                hidden
                type="file"
                className="file-input file-input-bordered w-full max-w-xs bg-white file:-order-none"
              />

              <button
                name="thumbnail"
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
              onChange={handleChange}
              id="year"
              name="year"
              form="year"
              type="text"
              placeholder="Year"
              className="input input-border ring-1 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-full mb-6"
            />
          </div>
          <div>
            <select
              // onChange={handleChangeCategoryId}
              onChange={handleChange}
              id="category_id"
              form="category_id"
              name="category_id"
              className="input input-border ring-2 ring-white hover:ring-cyan-500 focus:ring-cyan-500 bg-neutral-600 w-full mb-6"
            >
              {categories.map((item) => (
                <option key={item.id} value={item.id} name="category_id">
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <textarea
              onChange={handleChange}
              id="description"
              name="description"
              form="description"
              type="text"
              style={{ resize: "none" }}
              placeholder="Description"
              className="input input-border ring-1 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-full h-36 mb-6"
            />
          </div>
          {/* EPISODE */}
          {/* <div>
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
          </div> */}
          <div className="w-full flex justify-end text-white">
            <div className="w-44 mt-6">
              <button
                type="submit"
                className="bg-red-600 flex justify-center rounded py-1 cursor-pointer"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddFilm;
