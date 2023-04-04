import React from 'react';
import BottomNavigatio from '../../Component/bottomNavigation/bottomNavigation';
import HeaderDesktop from '../../Component/Header/Header-desktop';
import HeaderMobile from '../../Component/HeaderMobile/HeaderMobile';
import "./InfoPage.scss";

function InfoPage() {
    return (
        <div className='info-page'>
            <HeaderDesktop/>
            <HeaderMobile/>

            <div className="about">

            </div>

            <BottomNavigatio/>
        </div>
    )
}

export default InfoPage
