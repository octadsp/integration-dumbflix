const EpisodeModal = () => {
  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative bg-light-black" htmlFor="">
          <h3 className="text-xl text-white font-bold">Add Episode</h3>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Title Episode"
                className="input input-border ring-1 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-3/4"
              />
              <input
                type="file"
                className="file-input file-input-bordered max-w-xs bg-white file:-order-none w-1/4"
              />
            </div>
            <div>
              <input
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
          </div>
        </label>
      </label>
    </>
  );
};

export default EpisodeModal;
