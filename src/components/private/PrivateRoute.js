import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../common/authPermission";

const PrivateRoute = ({ children }) => {
  const authed = isAuthenticated();

  return authed ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
