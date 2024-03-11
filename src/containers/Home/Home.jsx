import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import LifeSideNavbar from "../LifeSideNavbar/LifeSideNavbar";
import RightSideNavbar from "../RightSideNavbar/RightSideNavbar";
import DisplayNews from "../DisplayNews/DisplayNews";

const Home = () => {

    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch("../../../public/news.json")
            .then(res => res.json())
            .then(data => setNews(data))

    }, [])

    return (
        <>
            <Header />
            <Navbar />
            <div className="grid lg:grid-cols-4 gap-6	">
                <div className="">
                    <LifeSideNavbar />
                </div>
                <div className=" border border-red-600 col-span-2">
                    {
                        news.map(displayNews=> <DisplayNews key={displayNews.id} displayNews={displayNews}/>)
                    }
                </div>
                <div className="">
                    <RightSideNavbar />
                </div>
            </div>
        </>
    );
};

export default Home;