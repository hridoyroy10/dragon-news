import { FaGoogle, FaGithub, FaFacebook, FaSquareTwitter, FaInstagram } from "react-icons/fa6";
import swimming from "../../assets/qZone1.png";
import clss from "../../assets/qZone2.png";
import play from "../../assets/qZone3.png";
import amazing from "../../assets/group.png"


const RightSideNavbar = () => {
    return (
        <div >
            <div className=" mb-4">
                <h2 className="text-3xl font-medium  mb-3">Login With</h2>
                <button className="btn btn-outline w-full text-xl  mb-3 rounded-none">
                    <FaGoogle className=" text-2xl" />
                    Login with Google
                </button>
                <button className="btn btn-outline w-full text-xl  mb-3 rounded-none">
                    <FaGithub className=" text-2xl" />
                    Login with Github
                </button>
            </div>

            <div className=" mb-4">
                <h2 className="text-3xl font-medium mb-3">Find Us On</h2>
                <button className="btn btn-outline w-full text-xl  rounded-none">
                    <FaFacebook className=" text-2xl" />
                    Facebook
                </button>
                <br />
                <button className="btn btn-outline w-full text-xl  rounded-none">
                    <FaSquareTwitter className=" text-2xl" />
                    Twitter
                </button>
                <br />
                <button className="btn btn-outline w-full text-xl  rounded-none">
                    <FaInstagram className=" text-2xl" />
                    Instagram
                </button>
            </div>

            <div className=" bg-gray-300 p-4 mb-4">
                <h2 className="text-3xl font-medium mb-3">Q-Zone</h2>
                <div className=" mb-4">
                    <img src={swimming} alt="" />
                </div>
                <div className=" mb-4">
                    <img src={clss} alt="" />
                </div>
                <div className=" mb-4">
                    <img src={play} alt="" />
                </div>
            </div>

            <div>
                <img src={amazing} alt="amazing" />
            </div>
        </div>
    );
};

export default RightSideNavbar;