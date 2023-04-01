import Slider from "react-slick";
import { AddShoppingCartOutlined, ChatBubbleOutline, FavoriteBorderOutlined, Star } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { incrementLike } from '../../redux/action/counterActions';


function SingleContent({
    images,
    price,
    title
}) {

    // const [like, setLike] = useState(false);
    // const likeCounter = useSelector(state => state.likeCounter);
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

    return (
        <div className="col-xl-5 mt-3">
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
