import React from 'react';
import { Link } from 'react-router-dom';
import "./categories.scss"

function Categories() {

    return (
        <div className='Categories'>
            <ul>
                <li>
                    <Link to={"/categories"}>
                        Barcha Bo'limlar
                    </Link>
                </li>
                <li>
                    <Link to="/categories">Chegirmalar</Link>
                </li>
                <li>
                    <Link to="/categories">
                        Yangiliklar
                    </Link>
                </li>
                <li>
                    <Link to="/categories">Yangi kelganlar</Link>
                </li>
                <li>
                    <Link to="/categories">chegirmalar</Link>
                </li>
                <li>
                    <Link to="/categories">Kitoblar</Link>
                </li>
                <li>
                    <Link to="/categories">Telefon va gadjetlar</Link>
                </li>
                <li>
                    <Link to="/categories">Televizorlar</Link>
                </li>
            </ul>
        </div>
    )
}

export default Categories
