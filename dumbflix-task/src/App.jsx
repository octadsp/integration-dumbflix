import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import TvSeries from "./pages/TvSeries";
import Movies from "./pages/Movies";
import DetailMovies from "./pages/DetailMovies";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import AdminFilm from "./pages/AdminFilm";
import ListTransaction from "./pages/ListTransaction";
import AddFilm from "./pages/AddFilm";
import AdminDetailFilm from "./pages/AdminDetailFilm";
import UpdateFilmAdmin from "./pages/UpdateFilmAdmin";
import {
  PrivateRouteAdmin,
  PrivateRouteLogin,
  PrivateRouteUser,
} from "./components/PrivateRoute";
import { useState, useContext, useEffect } from "react";
import Navbar from "./components/pages/Navbar";

// Import UserContext
import { UserContext } from "./context/userContext";

// Import API config
import { API, setAuthToken } from "./config/api";

const App = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");
      console.log("check user success : ", response);
      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;
      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
      setIsLoading(false);
    } catch (error) {
      console.log("check user failed : ", error);
      dispatch({
        type: "AUTH_ERROR",
      });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      checkUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Redirect Auth but just when isLoading is false
    if (!isLoading) {
      if (state.isLogin === false) {
        navigate("/");
      }
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? null : (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route element={<PrivateRouteLogin />}>
            <Route element={<PrivateRouteUser />}>
              <Route path="/movies" element={<Movies />} />
              <Route path="/tvshow" element={<TvSeries />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/film/:id" element={<DetailMovies />} />
            </Route>

            <Route element={<PrivateRouteAdmin />}>
              <Route exact path="/transaction" element={<ListTransaction />} />
              {/* <Route exact path="/admin" element={<AdminFilm />} /> */}
              <Route exact path="/addfilm" element={<AddFilm />} />
              <Route
                exact
                path="/filmadmin/:id"
                element={<AdminDetailFilm />}
              />
              <Route
                exact
                path="/updatefilm/:id"
                element={<UpdateFilmAdmin />}
              />
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
