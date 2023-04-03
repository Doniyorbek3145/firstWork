import React from 'react';
import BottomNavigatio from '../../Component/bottomNavigation/bottomNavigation';
import Categories from '../../Component/categories/categories';
import HeaderDesktop from '../../Component/Header/Header-desktop';
import HeaderMobile from '../../Component/HeaderMobile/HeaderMobile';
import Main from '../../Component/main/main';
function Home() {

    return (
        <div>
            <HeaderMobile/>
            <HeaderDesktop/>
            <Categories/>
            <Main/>
            <BottomNavigatio/>
        </div>
    )
}

export default Home
