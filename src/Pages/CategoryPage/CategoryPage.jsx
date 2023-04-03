import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import HeaderDesktop from '../../Component/Header/Header-desktop';
import HeaderMobile from '../../Component/HeaderMobile/HeaderMobile';
import "./CategoryPage.scss"

function CategoryPage() {
    const [category, setcategory] = useState([]);
    const [loader, setLoader] = useState(false)

    function getCategory() {
        axios.get("https://api.escuelajs.co/api/v1/categories")
            .then((res) => {
                setcategory(res.data)
            }).catch((e) => {
                console.log(e.message);
            })
    }

    useEffect(() => {
        getCategory();
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }, [])

    

    return (
        <div className='category-page'>

            <HeaderDesktop/>
            <HeaderMobile/>
            <div className="container category">

                {
                    loader ?
                        <div className='loader-category'>
                            <BounceLoader height={50} color="#F8B517" />
                        </div>
                        :
                        <ul>
                            {category.map((item) => (
                                <li key={item.id}>
                                    <Link to={`/categories/${item.name}` }>
                                        <div className='image'>
                                            <img src={item.image} alt="" />
                                        </div>
                                        <h4>{item.name}</h4>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                }

            </div>
        </div>
    )
}

export default CategoryPage
