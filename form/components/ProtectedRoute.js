import React from "react";
import { Navigate } from "react-router-dom";
import Auth from "./Auth";

const ProtectedRoute = ({children})=>{
    const isAuth = Auth.getAuth();
    return (
       isAuth ? children : <Navigate to="/" />
    );
}
  export default ProtectedRoute;

