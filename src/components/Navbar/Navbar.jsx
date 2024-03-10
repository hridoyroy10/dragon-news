import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        < div className=" text-center ">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Career</NavLink>
            <Link to="/"> home</Link>
        </ div>
    );
};

export default Navbar;