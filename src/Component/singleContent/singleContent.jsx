import Slider from "react-slick";
import { AddShoppingCartOutlined, ChatBubbleOutline, FavoriteBorderOutlined, Star } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { incrementLike, setCategoryName } from '../../redux/action/counterActions';
import { useHistory } from "react-router-dom";


function SingleContent({
    images,
    price,
    title,
    id
}) {
    const dispatch = useDispatch();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        nextArrow: null,
        prevArrow: null,
    };

    function likeOn() {
        dispatch(incrementLike())
    }

    // const oneContentInfo = useSelector(state => state.categoryName);
    const history = useHistory();

    function OnePageIn(id, name) {
        dispatch(setCategoryName(id))
        history.push(`/home/${name}`, {replace: true})
    }

    return (
        <div className="col-xl-5 mt-3" onClick={()=>OnePageIn(id, title)}>
            <div className="image-carousel">
                <Slider {...settings}>
                    <div>
                        <img src={images[0]} alt="Image1" />
                    </div>
                    <div>
                        <img src={images[1]} alt="Image2" />
                    </div>
                    <div>
                        <img src={images[2]} alt="Image3" />
                    </div>
                </Slider>
            </div>
            <div className="content-section">
                <h3 className='title'>
                    {title}
                </h3>
                <div className="stars">
                    <div className="star-box">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                    <div className="comments">
                        <ChatBubbleOutline />
                        0 ta sharh
                    </div>
                </div>
                <h4 className='last-price'>{price + 15} 000 so'm</h4>
                <h2 className='price'>{price} 000  so'm</h2>

                <button>Bir klikda olish</button>

                <div className="absolute">
                    <span>chegirma</span>
                    <div className='images'>
                        <div>
                            <AddShoppingCartOutlined />
                        </div>
                        <div onClick={likeOn}>
                            <FavoriteBorderOutlined />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleContent
