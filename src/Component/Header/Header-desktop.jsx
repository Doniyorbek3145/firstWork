import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";


function HeaderDesktop() {

    return (
        <header className='header-desktop'>
            <nav className='container'>
            <div className="logo">
                <img src="../assets/isystem-logo.png" alt="" />
            </div>
                <div className="search">
                    <input type="search" />
                    <button>
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
                            <span>Sevimlilar<span className='absolute'>0</span></span>
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
    )
}

export default HeaderDesktop
