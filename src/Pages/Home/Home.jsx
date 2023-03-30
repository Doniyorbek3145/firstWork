import React from 'react';
import BottomNavigatio from '../../Component/bottomNavigation/bottomNavigation';
import HeaderDesktop from '../../Component/Header/Header-desktop';
import Main from '../../Component/main/main';

function Home() {
    return (
        <div>
            <HeaderDesktop/>
            {/* <Main/> */}
            <BottomNavigatio/>
        </div>
    )
}

export default Home
