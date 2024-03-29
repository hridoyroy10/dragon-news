import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navLink = <>
        <li><NavLink className="text-xl rounded-xl gap-3" to='/'>Home</NavLink></li>
        <li><NavLink className="text-xl rounded-xl gap-3" to='/about'>About</NavLink></li>
        <li><NavLink className="text-xl rounded-xl gap-3" to='/login'>Login</NavLink></li>
    </>

    const handleSingOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <div className="w-10 rounded-full">
                    <img alt="user logo " src={logo} />
                </div>
                {
                    user ?
                        <button onClick={handleSingOut} className="btn rounded-none">Sing Out</button>
                        :
                        <Link to='/login'>
                            <button className="btn rounded-none text-2xl">Login</button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;