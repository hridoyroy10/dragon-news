
import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import LifeSideNavbar from "../LifeSideNavbar/LifeSideNavbar";
import RightSideNavbar from "../RightSideNavbar/RightSideNavbar";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
console.log(news);

    return (
        <>
            <Header />
            <Navbar />
            <div className="grid lg:grid-cols-4 gap-6	">
                <div className="">
                    <LifeSideNavbar />
                </div>
                <div className="col-span-2 ">
                    {
                        news.map(singelNews => <NewsCard key={singelNews.id} singelNews={singelNews}></NewsCard>)
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