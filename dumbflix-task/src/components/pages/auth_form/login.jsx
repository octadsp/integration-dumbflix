import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Import API config
import { API, setAuthToken } from "../../../config/api";

// Import useMutation
import { useMutation } from "react-query";

// Import userContext
import { UserContext } from "../../../context/userContext";

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);

  const [state, dispatch] = useContext(UserContext);

  const [getUser, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });

  const { email, password } = getUser;

  const handleOnChange = (e) => {
    setUser({
      ...getUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const response = await API.post("/login", getUser);

      console.log("login success : ", response);

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
            <span>Login Success!</span>
          </div>
        </div>
      );

      setMessage(alert);
      setUser({
        email: "",
        password: "",
      });

      // Status check
      setTimeout(() => {
        // Send data to useContext
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });

        setAuthToken(localStorage.token);

        if (response.data.data.role === "admin") {
          navigate("/");
          window.location.reload();
        } else {
          window.location.reload();
        }
      }, 3000);
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
            <span>Email or Password not found !</span>
          </div>
        </div>
      );
      setMessage(alert);
      console.log("login failed : ", err);
    }
  });

  const handleCloseLoginModal = () => {
    document.querySelector("#register").click();
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-login" className="modal-toggle" />

      <label
        htmlFor="my-modal-login"
        className="modal cursor-pointer"
        class:modal-open="false"
      >
        <form
          className="modal-box bg-black/80 w-96"
          onSubmit={(e) => handleOnSubmit.mutate(e)}
        >
          {message && message}
          <h3 className="text-3xl font-bold text-white mb-6 mt-3">Login</h3>
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
            className="input input-border ring-2 ring-white hover:ring-cyan-500 focus:ring-cyan-500 focus:placeholder-white bg-neutral-600 text-white w-full max-w-sm"
          />
          <button className="rounded bg-red-600 text-white mt-11 py-3 w-full font-bold">
            Login
          </button>
          <p className="text-center  my-4 text-base">
            Dont't Have an account ? Click&nbsp;
            <span>
              <label
                htmlFor="my-modal-login"
                onClick={handleCloseLoginModal}
                className="cursor-pointer font-bold"
              >
                Here
              </label>
            </span>
          </p>
        </form>
      </label>
    </div>
  );
};

export default Login;
