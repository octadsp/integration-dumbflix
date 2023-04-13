import { useState } from "react";

// Import API config
import { API } from "../../../config/api";

// Import useMutation
import { useMutation } from "react-query";

const Register = () => {
  const [message, setMessage] = useState(null);

  const [getData, setData] = useState({
    email: "",
    password: "",
    fullname: "",
    gender: "",
    phone: "",
    address: "",
  });

  const { email, password, fullname, gender, phone, address } = getData;

  const handleOnSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const response = await API.post("/register", getData);

      console.log("register success : ", response);

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
            <span>Register Success!</span>
          </div>
        </div>
      );

      setMessage(alert);
      setData({
        email: "",
        password: "",
        fullname: "",
        gender: "",
        phone: "",
        address: "",
      });
    } catch (err) {
      const alert = (
        <div className="alert alert-error shadow-lg">
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
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Register Failed!</span>
          </div>
        </div>
      );
      setMessage(alert);
      console.log("register failed : ", err);
    }
  });

  const handleOnChange = (e) => {
    //SetData
    setData({
      ...getData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCloseRegisterModal = () => {
    // document.querySelector('#my-modal-register').checked=false
    // setCloseRegist(false)
    document.querySelector("#login").click();
  };

  return (
    <div className="">
      <input type="checkbox" id="my-modal-register" className="modal-toggle" />
      <label
        htmlFor="my-modal-register"
        className="modal cursor-pointer"
        class:modal-open="false"
      >
        <label className="modal-box relative bg-black/80 w-96">
          {message && message}
          <form onSubmit={(e) => handleOnSubmit.mutate(e)}>
            <h3 className="text-3xl font-bold text-white mb-6 mt-3">
              Register
            </h3>

            <input
              type="email"
              name="email"
              form="email"
              onChange={handleOnChange}
              value={email}
              placeholder="Email"
              className="input input-border ring-2 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-full max-w-sm mb-6"
            />
            <input
              type="password"
              name="password"
              form="password"
              onChange={handleOnChange}
              value={password}
              placeholder="Password"
              className="input input-border ring-2 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-full max-w-sm mb-6"
            />
            <input
              type="text"
              name="fullname"
              form="fullname"
              onChange={handleOnChange}
              value={fullname}
              placeholder="Full Name"
              className="input input-border ring-2 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-full max-w-sm mb-6"
            />
            {/* <input type="text" name="gender" onChange={handleOnChange} value={getData.gender} placeholder="Gender" className="input input-border ring-2 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-full max-w-sm mb-6" /> */}
            <select
              name="gender"
              form="gender"
              onChange={handleOnChange}
              value={gender}
              className="input input-border ring-2 ring-white hover:ring-cyan-500 focus:ring-cyan-500 bg-neutral-600 w-full max-w-sm mb-6"
            >
              <option className="hidden" value="default">
                Gender
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input
              type="text"
              name="phone"
              form="phone"
              onChange={handleOnChange}
              value={phone}
              placeholder="Phone"
              className="input input-border ring-2 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-full max-w-sm mb-6"
            />
            <input
              type="text"
              name="address"
              form="address"
              onChange={handleOnChange}
              value={address}
              placeholder="Address"
              className="input input-border ring-2 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-full max-w-sm"
            />
            <button
              type="submit"
              className="rounded bg-white text-red-600 mt-11 py-3 w-full font-bold"
            >
              Register
            </button>
            <p className="text-center  my-4 text-base">
              Dont't Have an account ? Click&nbsp;
              <span>
                <label
                  htmlFor="my-modal-register"
                  onClick={handleCloseRegisterModal}
                  className="cursor-pointer font-bold"
                >
                  Here
                </label>
              </span>
            </p>
          </form>
        </label>
      </label>
    </div>
  );
};

export default Register;
