import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa6";



const Register = () => {

    const [showPassword, setShowPassword] = useState(' ');

    const { createUser } = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <>
            <Navbar />
            <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto bg-gray-300 p-6 mt-9">
                <h2 className="text-5xl text-center">Register your account</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-3xl">Your Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered rounded-none" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-3xl">Photo Url</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered rounded-none" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-3xl">Email address</span>
                    </label>
                    <input type="email" name="email" placeholder="info@gmail.com" className="input input-bordered rounded-none" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-3xl">Password</span>
                    </label>
                    <div className="relative">
                        <input type={ !showPassword ? "text" : "password"} id="password" name="password" placeholder="****" className="input w-full input-bordered rounded-none" required />
                        <span className=" absolute -ml-8 mt-4 text-lg" onClick={() => { setShowPassword(!showPassword) }}>
                            {
                                showPassword ? <FaEyeSlash /> : <FaEye />
                            }
                        </span>
                    </div>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-base">Accept Term & Conditions</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary rounded-none text-2xl">Register</button>
                    <p className=" text-blue-600">You have already account <Link className=" text-red-600" to="/login">Login</Link></p>
                </div>
            </form>
        </>
    );
};


export default Register;