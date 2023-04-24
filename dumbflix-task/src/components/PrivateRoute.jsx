import { Navigate, Outlet } from "react-router-dom";

// Import context
import { useContext } from "react";

// Import UserContext
import { UserContext } from "../context/userContext";

export function PrivateRouteLogin() {
  const [state] = useContext(UserContext);

  if (!state.isLogin) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}

export function PrivateRouteUser() {
  const [state] = useContext(UserContext);

  if (state.user.role === "admin") {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}

export function PrivateRouteAdmin() {
  const [state] = useContext(UserContext);

  if (state.user.role !== "admin") {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
