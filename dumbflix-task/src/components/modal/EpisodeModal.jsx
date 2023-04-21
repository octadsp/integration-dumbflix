import { useState } from "react";
import { useMutation } from "react-query";

// Import API config
import { API } from "../../config/api";

const EpisodeModal = ({ idFilm }) => {
  const [preview, setPreview] = useState(null);
  const [notif, setNotif] = useState(null);
  const [formEpisode, setFormEpisode] = useState({
    title: "",
    thumbnail: "",
    video: "",
    film_id: "",
  });

  const handleChange = (e) => {
    setFormEpisode({
      ...formEpisode,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create thumbnail url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleAddEpisode = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configurasi
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      // Store data with FormData as Object
      const formData = new FormData();
      formData.set("title", formEpisode.title);
      formData.set(
        "thumbnail",
        formEpisode.thumbnail[0],
        formEpisode.thumbnail[0].name
      );
      formData.set("video", formEpisode.video);
      formData.set("film_id", idFilm);

      // Insert Episode Data
      const response = await API.post("/episode", formData, config);
      console.log("Add Episode Success : ", response);

      const alert = (
        <div className="alert alert-success shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Add Episode Success !</span>
          </div>
        </div>
      );

      setNotif(alert);

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      console.log("Add Episode Failed : ", err);
    }
  });
  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative bg-light-black" htmlFor="">
          {notif && notif}
          <h3 className="text-xl text-white font-bold">Add Episode</h3>
          <form
            onSubmit={(e) => handleAddEpisode.mutate(e)}
            className="flex flex-col gap-5 mt-5"
          >
            <div className="flex gap-3">
              <input
                onChange={handleChange}
                name="title"
                form="title"
                type="text"
                placeholder="Title Episode"
                className="input input-border ring-1 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-3/4"
              />
              <input
                onChange={handleChange}
                name="thumbnail"
                form="thumbnail"
                type="file"
                className="file-input file-input-bordered max-w-xs bg-white file:-order-none w-1/4"
              />
            </div>
            <div>
              <input
                onChange={handleChange}
                name="video"
                form="video"
                type="text"
                placeholder="Link Film"
                className="input input-border ring-1 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-full"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-red-600 flex justify-center font-bold text-white rounded px-20 py-1 cursor-pointer"
              >
                Add
              </button>
            </div>
          </form>
        </label>
      </label>
    </>
  );
};

export default EpisodeModal;
