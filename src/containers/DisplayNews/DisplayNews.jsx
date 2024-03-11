import PropTypes from 'prop-types';

const DisplayNews = ({displayNews}) => {
    const {image_url,} = displayNews;
    
    return (
        <div>
            <img src={image_url} alt="" />
        </div>
    );
};

DisplayNews.propTypes = {
    displayNews : PropTypes.object.isRequired
}


export default DisplayNews;