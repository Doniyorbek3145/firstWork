import React from 'react';
import BottomNavigatio from '../../Component/bottomNavigation/bottomNavigation';
import HeaderDesktop from '../../Component/Header/Header-desktop';
import HeaderMobile from '../../Component/HeaderMobile/HeaderMobile';
import Main from '../../Component/main/main';

function Home() {
    return (
        <div>
            <HeaderDesktop/>
            <HeaderMobile/>
            {/* <Main/> */}
            <BottomNavigatio/>
        </div>
    )
}

export default Home
