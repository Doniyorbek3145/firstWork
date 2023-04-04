import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BounceLoader } from 'react-spinners';
import BottomNavigatio from '../../Component/bottomNavigation/bottomNavigation';
import Categories from '../../Component/categories/categories';
import HeaderDesktop from '../../Component/Header/Header-desktop';
import HeaderMobile from '../../Component/HeaderMobile/HeaderMobile';
import SingleContent from '../../Component/singleContent/singleContent';
import "./oneCategory.scss"
function OneCategory() {
    const [product, setProduct] = useState([]);
    const [loader, setLoader] = useState(false);

    function getProducts() {
        axios.get(`https://api.escuelajs.co/api/v1/categories/2/products`)
            .then((res) => {
                setProduct(res.data)
            }).catch((e) => {
                console.log(e.message)
            })
    }

    useEffect(() => {
        window.scroll(0, 0);
        getProducts();
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 4000)
    }, []);
    return (
        <div className='one-category'>
            <HeaderDesktop/>
            <HeaderMobile/>
            <Categories/>
            <div className="main">
                {
                    loader ?
                        <div className='loader-box'>
                            <BounceLoader height={50} color="#F8B517" className="loader" />
                        </div>
                        :
                        <div className="container-fluit">
                            <div className="row">
                                {
                                    product.map((item) => (
                                        <SingleContent
                                            key={item.id}
                                            id={item.id}
                                            images={item.images}
                                            price={item.price}
                                            title={item.title}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                }
            </div>
            <BottomNavigatio/>
        </div>
    )
}

export default OneCategory
