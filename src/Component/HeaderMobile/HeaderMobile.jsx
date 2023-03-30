import { Close, Menu } from '@mui/icons-material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./HeaderMobile.scss"

function HeaderMobile() {

    const [navbar, setNavbar] = useState(false);
    function navbarOpener() {
        if (navbar === true) {
            setNavbar(false)
        }else{
            setNavbar(true)
        }
    }

    return (
        <header className='header-mobile'>
            <div className='header-top'>
                <div className="burger" onClick={navbarOpener}>
                    <Menu className={navbar === true? "d-none" : "d-block"}/>
                    <Close className={navbar === false? "d-none" : "d-block"}/>
                </div>
                <div className="logo">
                    <img src="../assets/isystem-logo.png" alt="" />
                </div>
            </div>
            <nav className='header-body'>
                <ul>
                    <li>
                        <Link to={""}>
                            <img src="../assets/payment.svg" alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to={""}>

                        </Link>
                    </li>
                    <li>
                        <Link to={""}>

                        </Link>
                    </li>
                    <li>
                        <Link to={""}>

                        </Link>
                    </li>
                    <li>
                        <Link to={""}>

                        </Link>
                    </li>
                    <li>
                        <Link to={""}>

                        </Link>
                    </li>
                    <li>
                        <Link to={""}>

                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderMobile
