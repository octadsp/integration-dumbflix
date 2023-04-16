// Import react-query
import { useQuery, useMutation } from "react-query";

// Import API config
import { API } from "../../config/api";

// Import State
import { useState, useEffect } from "react";

// Import react-router-dom
import { useParams } from "react-router-dom";

const DeleteFilmModal = () => {
  return (
    <>
      <div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <label htmlFor="my-modal" className="modal cursor-pointer">
          <label
            className="modal-box relative bg-light-black text-white w-80"
            htmlFor=""
          >
            <h3 className="text-lg font-bold">Delete Data</h3>
            <p className="py-4">Are you sure want to delete this data ?</p>
            <div className="flex justify-center gap-5">
              <button className="btn btn-success bg-green-500 px-10">
                Yes
              </button>
              <button className="btn btn-error bg-red-600 px-10">No</button>
            </div>
          </label>
        </label>
      </div>
    </>
  );
};

export default DeleteFilmModal;
