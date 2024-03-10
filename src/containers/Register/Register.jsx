

const Register = () => {
    return (
        <form className="md:w-3/4 lg:w-1/2 mx-auto bg-gray-300 p-6 mt-9">
            <h2 className="text-5xl text-center">Register your account</h2>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-3xl">Your Name</span>
                </label>
                <input type="text" placeholder="Your Name" className="input input-bordered rounded-none"  />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-3xl">Email address</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered rounded-none" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-3xl">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered rounded-none" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover text-base">Accept Term & Conditions</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary rounded-none">Login</button>
            </div>
        </form>
    );
};

export default Register;