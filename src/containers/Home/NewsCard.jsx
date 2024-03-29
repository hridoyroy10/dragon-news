import PropTypes from 'prop-types';
import { FaBookmark, FaEye, FaStar } from "react-icons/fa6";
import { RxShare1 } from "react-icons/rx";
import { Link } from 'react-router-dom';



const NewsCard = ({ singelNews }) => {
    const { author, details, title, total_view, image_url, _id } = singelNews;
    return (
        <div>
            <div className="card w-full mb-16 bg-base-100 shadow-xl">
                <div className='bg-gray-300 p-4 flex justify-between items-center rounded-t-xl'>
                    <div className=' flex gap-4 '>
                        <img className=' w-10 rounded-full' src={author.img} alt="author" />
                        <div>
                            <h2 className="text-3xl">{author.name}</h2>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div className=' text-2xl flex gap-4'>
                        <FaBookmark />
                        <RxShare1 />
                    </div>
                </div>
                <p className='font-bold p-4 text-4xl'>{title}</p>
                <figure><img src={image_url} alt="news image" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-normal">
                        {
                            details.length > 200 ?
                                <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className=' font-bold text-red-500'>....Read More</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </h2>
                    <hr />

                    <div className="card-actions justify-between items-center">
                        <div className="flex justify-center items-center gap-3 text-2xl text-red-700"><FaStar /><FaStar /><FaStar /><FaStar /></div>
                        <div className=" text-2xl flex justify-center items-center gap-4"><FaEye /> {total_view}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    singelNews: PropTypes.object.isRequired
}

export default NewsCard;