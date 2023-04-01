import { Close, Facebook, Info, Instagram, KeyboardArrowDown, Menu, Newspaper, Telegram } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import { Api } from '../main/main';
import SingleContent from '../singleContent/singleContent';
import "./HeaderMobile.scss"

function HeaderMobile() {

    const [navbar, setNavbar] = useState(false);
    const [search, setSearch] = useState('');
    const [searchRes, setSearchRes] = useState([]);
    const [loader, setLoader] = useState(false);

    function navbarOpener() {
        if (navbar === true) {
            setNavbar(false)
        } else {
            setNavbar(true)
        }
    }

    function navbarCloser() {
        if (navbar === true) {
            setNavbar(false)
        }
    }

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
            <div className='header-sm'>
                <header className='header-mobile' onClick={navbarCloser}>
                    <div className='header-top'>
                        <div className="burger" onClick={navbarOpener}>
                            <Menu className={navbar === true ? "d-none" : "d-block"} />
                            <Close className={navbar === false ? "d-none" : "d-block"} />
                        </div>
                        <div className="logo">
                            <img src="../assets/isystem-logo.png" alt="" />
                        </div>
                    </div>
                    <nav className={navbar === true ? 'header-body active' : 'header-body'}>

                        <ul>
                            <li>
                                <Link to={""}>
                                    <img src="../assets/payment.svg" alt="" />
                                    <span>To'lov</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <img src="../assets/tracker.svg" alt="" />
                                    <span>Buyurtmani kuzatib borish</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <img src="../assets/heart.svg" alt="" />
                                    <span>Sevimlilar</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <img src="../assets/new-product.svg" alt="" />
                                    <span>Yangi kelganlar</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <Newspaper />
                                    <span>Yangiliklar</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <Info />
                                    <span>Biz haqimizda</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <span>O'zbekcha <KeyboardArrowDown /></span>
                                </Link>
                            </li>
                        </ul>
                        <div className="header-end">
                            <div className="icon-box">
                                <a href="https://www.facebook.com/isystem.uz" target="__blank">
                                    <Facebook />
                                </a>
                                <a href="https://telegram.org" target="__blank">
                                    <Telegram />
                                </a>

                                <a href="https://www.instagram.com/isystem.uz/" target="__blank">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="search-sm">
                    <input type="search" placeholder='Qidiring...' onChange={(e)=>{setSearch(e.target.value)}}/>
                    <button onClick={fetchSearch}>
                        <img src="../assets/search-icon.svg" alt="" />
                        <span>Qidirish</span>
                    </button>
                </div>
            </div>

            <div className="main main-mobile">
                {
                    loader ?
                        <div className='loader-box'>
                            <BounceLoader height={50} color="#F8B517" className="loader" />
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

export default HeaderMobile
