import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import RightSideNavbar from "../RightSideNavbar/RightSideNavbar";

const NewsDetails = () => {
    const {id} = useParams();
    return (
        <>
            <Header />
            <Navbar />
            <div className="grid grid-cols-4">
                <div className=" col-span-3">
                    <h2>This is News Details</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNavbar />
                </div>
            </div>
        </>
    );
};

export default NewsDetails;