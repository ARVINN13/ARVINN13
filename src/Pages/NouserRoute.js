import { Route } from "react-router-dom";
import {useSelector } from "react-redux";
import NouserLoadingtoredirect from "./NouserLoadingtoredirect";

const NouserRoute = ({ children, ...rest }) => {
    const { currentUser } = useSelector((state) => state.user);
    console.log(currentUser);
    return (!currentUser) ? <Route {...rest} /> : <NouserLoadingtoredirect />;

};

export default NouserRoute;