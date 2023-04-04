import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import BottomNavigatio from '../../Component/bottomNavigation/bottomNavigation';
import HeaderDesktop from '../../Component/Header/Header-desktop';
import HeaderMobile from '../../Component/HeaderMobile/HeaderMobile';
import { setUrlName } from '../../redux/action/counterActions';
import "./CategoryPage.scss"

function CategoryPage() {
    const [category, setcategory] = useState([]);
    const [loader, setLoader] = useState(false);
    const dispatch= useDispatch();

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
    }, []);
    
    const history= useHistory()

    function changeUrl(id, urlName) {
        dispatch(setUrlName(id));
        history.push(`/categories/${urlName}`, {replace: true})
    }

    



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
                                <li key={item.id} style={{cursor: "pointer"}} onClick={()=>changeUrl(item.id, item.name)}>
                                        <div className='image'>
                                            <img src={item.image} alt="" />
                                        </div>
                                        <h4>{item.name}</h4>
                                </li>
                            ))}
                        </ul>
                }

            </div>
            <BottomNavigatio/>
        </div>
    )
}

export default CategoryPage
