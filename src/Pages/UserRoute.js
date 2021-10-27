import React from "react";
import { Route } from "react-router-dom";
import {useSelector } from "react-redux";
import Loadingtoredirect from "./Loadingtoredirect";

const UserRoute = ({ children, ...rest }) => {
    const {currentUser} = useSelector((state) => state.user);
    console.log("currentUser",currentUser)
    return (currentUser) ? <Route {...rest} /> : <Loadingtoredirect />;

};

export default UserRoute;