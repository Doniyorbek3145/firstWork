import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BottomNavigatio from '../../Component/bottomNavigation/bottomNavigation';
import HeaderDesktop from '../../Component/Header/Header-desktop';
import HeaderMobile from '../../Component/HeaderMobile/HeaderMobile';
import "./InfoPage.scss";
import { BounceLoader } from 'react-spinners';

function InfoPage() {
    const itemId = useSelector(state => state.categoryName);
    const [product, setProduct] = useState([]);
    const [loader, setLoader] = useState(false);
    const [category, setCategory] = useState('')
    function getOneItem() {
        axios.get(`https://api.escuelajs.co/api/v1/products/${itemId}`)
            .then((res) => {
                setProduct(res.data)
            }).catch((e) => {
                console.log(e.message);
            })
    }


    useEffect(() => {
        setLoader(true)
        getOneItem();
        setTimeout(() => {
            setLoader(false)
        }, 2500);
    }, []);

    const CategoryType = product.category;

    // if (CategoryType === 1) {
    //     setCategory("Kiyimlar")
    // } else if (CategoryType === 2){
    //     setCategory("Soatlar")
    // }else if (CategoryType === 3){
    //     setCategory("Mebellar")
    // }else if (CategoryType === 4){
    //     setCategory("Oyoq kiyimlar")
    // }else{
    //     setCategory("Boshqalar")
    // }

    



    return (
        <div className='info-page'>
            <HeaderDesktop />
            <HeaderMobile />

            {
                loader === true ?
                    <div className='loader-box'>
                        <BounceLoader height={50} color="#F8B517" className="loader" />
                    </div>
                    :
                    <div className="about container">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={"/"}>Bosh sahifa</Link></li>
                            <li className="breadcrumb-item"><Link to={"/categories"}>Kategoriya</Link></li>
                            <li className="breadcrumb-item"><Link to={"/"}>{category}</Link></li>
                            <li className="breadcrumb-item active">{product?.title}</li>
                        </ul>
                        <div className='single-content'>

                        </div>
                    </div>
            }


            <BottomNavigatio />
        </div>
    )
}

export default InfoPage
