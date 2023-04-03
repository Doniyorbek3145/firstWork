import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./main.scss";
import SingleContent from '../singleContent/singleContent';
import { BounceLoader } from 'react-spinners';
import { useSelector } from 'react-redux';
export const Api = "https://api.escuelajs.co/api/v1/products";

function Main() {

    const [product, setProduct] = useState([]);
    const [loader, setLoader] = useState(false);
    const inputValue = useSelector(state => state.searchValue);
    const refreshButton = useSelector(state => state.refresh);
    function getProducts() {
        axios.get(Api + "/?title=" + inputValue)
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

    if (refreshButton === true) {
        getProducts()
        
    }





    return (
        <div className="main">
            {
                loader ?
                    <div className='loader-box'>
                        <BounceLoader height={50} color="#F8B517" className="loader" />

                        {/* <PuffLoader height={50} color="#F8B517" className="loader"/> */}
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

    )
}

export default Main
