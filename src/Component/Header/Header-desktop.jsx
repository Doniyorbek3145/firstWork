import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import { Api } from '../main/main';
import SingleContent from '../singleContent/singleContent';
import "./Header.scss";


function HeaderDesktop() {
    const likeCounter = useSelector(state => state.likeCounter);
    const [search, setSearch] = useState('');
    const [searchRes, setSearchRes] = useState([]);
    const [loader, setLoader] = useState(false)

    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(
                Api + "/?title=" + search,

            );
            setSearchRes(data)
            setLoader(true)
            setTimeout(() => {
                setLoader(false)
            }, 4000)


        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 4000)
    }, []);

    return (
        <div>
            <header className='header-desktop'>
                <nav className='container'>
                    <div className="logo">
                        <Link to={"/"}>
                            <img src="../assets/isystem-logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="search">
                        <input type="search" onChange={(e) => { setSearch(e.target.value) }} />
                        <button onClick={fetchSearch}>
                            <img src="../assets/search-icon.svg" alt="" />
                            <span>Qidirish</span>
                        </button>
                    </div>
                    <ul>
                        <li>
                            <Link to={"/"}>
                                <img src="../assets/payment.svg" alt="" />
                                <span>To'lov</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <img src="../assets/tracker.svg" alt="" />
                                <span>Trek</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <img src="../assets/language.svg" alt="" />
                                <span>O'zbekcha</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <img src="../assets/cart.svg" alt="" />
                                <span>Savatcha<span className='absolute'>0</span></span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <img src="../assets/heart.svg" alt="" />
                                <span>Sevimlilar<span className='absolute'>{likeCounter}</span></span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"}>
                                <img src="../assets/avatar.svg" alt="" />
                                <span>Kabinet</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="main main-desktop">
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
                                    searchRes.map((item) => (
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
        </div>
    )
}

export default HeaderDesktop
