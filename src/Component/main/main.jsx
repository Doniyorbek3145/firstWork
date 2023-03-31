import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./main.scss";
import Slider from "react-slick";
import { AddShoppingCartOutlined, ChatBubbleOutline, FavoriteBorderOutlined, Star } from '@mui/icons-material';



function Main() {

    const [product, setProduct] = useState([]);
    const [like, setLike] = useState(false);
    const [likeCounter, setLikeCounter] = useState(0);

    function getProducts() {
        axios.get("https://api.escuelajs.co/api/v1/products")
            .then((res) => {
                setProduct(res.data)
            }).catch((e) => {
                console.log(e.message)
            })
    }

    useEffect(() => {
        getProducts()
    }, []);

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
        if (like === false) {
            setLike(true);
            setLikeCounter(likeCounter + 1)
        } else {
            setLike(false);
            setLikeCounter(likeCounter - 1)
        }
    }

    return (
        <div className="main">
            <div className="container-fluit">
                <div className="row">
                    {
                        product.map((item) => (
                            <div className="col-xl-5 mt-3" key={item.id}>
                                <div className="image-carousel">
                                    <Slider {...settings}>
                                        <div>
                                            <img src={item.images[0]} alt="Image1" />
                                        </div>
                                        <div>
                                            <img src={item.images[1]} alt="Image2" />
                                        </div>
                                        <div>
                                            <img src={item.images[2]} alt="Image3" />
                                        </div>
                                    </Slider>
                                </div>
                                <div className="content-section">
                                    <h3 className='title'>
                                        {item.title}
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
                                    <h4 className='last-price'>{item.price-15} 000 so'm</h4>
                                    <h2 className='price'>{item.price} 000  so'm</h2>
                                    
                                    <button>Bir klikda olish</button>

                                    <div className="absolute">
                                        <span>chegirma</span>
                                        <div className='images'>
                                            <div>
                                                <AddShoppingCartOutlined />
                                            </div>
                                            <div onClick={likeOn}>
                                                <FavoriteBorderOutlined className={like === true ? "bg-danger" : null} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Main
