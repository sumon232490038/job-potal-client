import { useContext } from "react";
import { AuthContextData } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContextData);
  const location = useLocation();
  console.log(location);

  if (loader) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/signIn" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
