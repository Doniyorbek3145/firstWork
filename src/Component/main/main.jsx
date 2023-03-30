import React, { useEffect, useState } from 'react';
import axios from 'axios';




function Main() {

    const [product, setProduct] = useState([]);

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
    }, [])

    return (
        <div className='container'>
            <div className="row">
                {
                    product.map((item, index) => (
                        <div className="col-xl-3 card" key={index}>
                            <div className="card-header">
                                <img src={item.images[0]} alt="" className='w-100' />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Main
