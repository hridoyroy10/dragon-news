import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import LifeSideNavbar from "../LifeSideNavbar/LifeSideNavbar";
import RightSideNavbar from "../RightSideNavbar/RightSideNavbar";

const Home = () => {
    return (
        <>
            <Header />
            <Navbar />
            <h2 className="text-red">This is Home pages</h2>
            <div className="grid lg:grid-cols-4 gap-6	">
                <div className=" border border-red-600">
                    <LifeSideNavbar />
                </div>
                <div className=" border border-red-600 col-span-2">
                    <h2 className="text-3xl text-red">This is dinamic news</h2>
                </div>
                <div className="border border-red-600">
                    <RightSideNavbar />
                </div>
            </div>
        </>
    );
};

export default Home;