import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function AuthRoute({ children }) {
  const { user = null } = useSelector((state) => state.auth);
  const { state } = useLocation();

  if (user) {
    // Redirect them to the / or page they requested.
    return <Navigate to="/posts" />;
  }

  return children;
}

export default AuthRoute;
