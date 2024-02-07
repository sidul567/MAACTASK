import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { user } = useSelector((state) => state.auth);
  return <>
  {
  Object.keys(user).length > 0 ? <Outlet /> : <Navigate to="/login" />
  }
  </>;
}

export default ProtectedRoute;
