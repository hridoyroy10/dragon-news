import moment from 'moment';


const Header = () => {
    return (
        <>
            <div className=" text-center leading-7 mt-5">
                <h2 className=" text-5xl font-fontOleo">The Dragon News</h2>
                <p><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </div>
            <div className=" flex  mt-5 justify-center p-2 bg-[#9e9e9e] items-center gap-3">
                <button className="w-56 bg-red-600 h-12 text-xl font-medium  text-slate-200">Latest</button>
                <marquee className="text-black">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</marquee>
            </div>
        </>
    );
};

export default Header;