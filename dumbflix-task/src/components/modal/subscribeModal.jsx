import React from "react";
import { useNavigate } from "react-router-dom";

function subscribeModal() {
  const navigate = useNavigate();
  return (
    <>
      <input type="checkbox" id="my-modal-subscribe" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-slate-200 p-5 ring ring-slate-500">
          <h3 className="font-bold text-xl text-black">Oops.. Sorry ☹️</h3>
          <p className="py-2 text-md text-black">
            Support us and enjoy premium content by subscribing. What are you
            waiting for? Join now!
          </p>
          <div className="modal-action mt-5">
            <label
              htmlFor="my-modal-subscribe"
              className="btn btn-sm bg-red-500 text-white border-white hover:bg-red-600 hover:font-bold"
            >
              cancel
            </label>
            <label
              onClick={() => navigate("/payment")}
              className="btn btn-sm px-6 bg-green-500 text-white border-white hover:bg-green-600 hover:font-bold"
            >
              join
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default subscribeModal;
