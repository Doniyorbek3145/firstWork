import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setRefresh, setSearchValue } from '../../redux/action/counterActions';
import "./Header.scss";


function HeaderDesktop() {
    const [searchText, setSearchText] = useState('')
    const likeCounter = useSelector(state => state.likeCounter);
    const dispatch = useDispatch();


    function getInputValue(e) {
        const {value} = e.target;
        setSearchText(value)
    }

    function searching() {
        dispatch(setSearchValue(searchText));
        Button()
    }

    function Button() {
        dispatch(setRefresh(true))

        setTimeout(()=>{
            setRefresh(false)
        }, 1500)
    }


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
                        <input type="search" onChange={getInputValue}/>
                        <button onClick={searching}>
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
        </div>
    )
}

export default HeaderDesktop
