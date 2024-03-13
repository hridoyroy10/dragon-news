import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const Privateroute = ({ children }) => {
    const { user, loding } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if(loding){
        return <span className="loading mx-auto p-30 loading-bars loading-lg"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

Privateroute.propTypes = {
    children: PropTypes.object.isRequired,
}


export default Privateroute;