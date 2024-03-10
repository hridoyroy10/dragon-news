import { Link } from "react-router-dom";


const Login = () => {
    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('password'));
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="md:w-3/4 lg:w-1/2 mx-auto bg-gray-300 p-6 mt-9">
                <h2 className="text-5xl text-center">Login your account</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-3xl">Email address</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered rounded-none" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-3xl">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered rounded-none" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-base">Forgot password?  </a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary rounded-none">Login</button>
                </div>
                <p className=" text-blue-600">Do not have an account <Link to="/register">Register</Link></p>
            </form>
        </>

    );
};

export default Login;