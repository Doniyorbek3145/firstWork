import { Close, Facebook, Info, Instagram, KeyboardArrowDown, Menu, Newspaper, Telegram } from '@mui/icons-material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./HeaderMobile.scss"

function HeaderMobile() {

    const [navbar, setNavbar] = useState(false);

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

    return (
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
                            <a href="https://www.facebook.com/isystem.uz" target="_blank">
                                <Facebook />
                            </a>
                            <a href="https://telegram.org" target="_blank">
                                <Telegram />
                            </a>

                            <a href="https://www.instagram.com/isystem.uz/" target="_blank">
                                <Instagram />
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="search-sm">
                <input type="search" placeholder='Qidiring...'/>
                <button>
                    <img src="../assets/search-icon.svg" alt="" />
                    <span>Qidirish</span>
                </button>
            </div>
        </div>
    )
}

export default HeaderMobile
