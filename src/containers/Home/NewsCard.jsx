import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";
import { RxShare1 } from "react-icons/rx";


const NewsCard = ({ singelNews }) => {
    const { author, image_url } = singelNews;
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
                    <div className=' flex gap-4'>
                        <FaBookmark />
                        <RxShare1/>
                    </div>
                </div>
                <figure><img src={image_url} alt="news image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
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