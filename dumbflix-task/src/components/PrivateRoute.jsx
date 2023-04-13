import { Navigate, Outlet } from "react-router-dom"
import Login from "./pages/auth_form/login";


const PrivateRoute = () => {
    const isLogginUser = JSON.parse(localStorage.getItem("userLoggedIn"))?.isLoggin

    console.log(isLogginUser);

    if(isLogginUser) {
        return <Outlet />;
    } else {
        return <Navigate to={'/'} />
    }
}

export default PrivateRoute;