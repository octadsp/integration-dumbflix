import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TvSeries from "./pages/TvSeries";
import Movies from "./pages/Movies";
import DetailMovies from "./pages/DetailMovies";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import AdminFilm from "./pages/AdminFilm";
import ListTransaction from "./pages/ListTransaction";
import AddFilm from "./pages/AddFilm";
import PrivateRoute from "./components/PrivateRoute";
import { useState } from "react";
import Navbar from "./components/pages/Navbar";

const App = () => {
  const [getLoginUser, setLoginUser] = useState();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/admin" element={<AdminFilm />} />
        <Route exact path="/transaction" element={<ListTransaction />} />
        <Route exact path="/addfilm" element={<AddFilm />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshow" element={<TvSeries />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/detail/:id" element={<DetailMovies />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
