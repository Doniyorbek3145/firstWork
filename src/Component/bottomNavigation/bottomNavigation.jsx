import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navigation.scss"

function BottomNavigatio() {

    const [navigate, setNavigate] = useState(1);
    localStorage.setItem("navigate", `${navigate}`);
    return (
        <div className='Navigation'>
            <ul>
                <li onClick={()=>{
                    setNavigate(1)
                }} className={navigate===1 ? "active" : null}>
                    <Link to={"/"}>
                        <img src="../assets/house-solid.svg" alt="" className="icon" />
                        <span className='text-center'>Bosh Sahifa</span>
                    </Link>
                </li>
                <li onClick={()=>{
                    setNavigate(2)
                }} className={navigate===2 ? "active" : null}>
                    <Link to={""}>
                        <img src="../assets/category.png" alt="" className="icon" />
                        <span>Kategoriya</span>
                    </Link>
                </li>
                <li onClick={()=>{
                    setNavigate(3)
                }} className={navigate===3 ? "active" : null}>
                    <Link to={""}>
                        <img src="../assets/cart.svg" alt="" className="icon" />
                        <span>Savatcha</span>
                    </Link>
                </li>
                <li 
                onClick={()=>{
                    setNavigate(4)
                }} className={navigate===4 ? "active" : null}>
                    <Link to={""}>
                        <img src="../assets/avatar.svg" alt="" className="icon" />
                        <span>Kabinet</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default BottomNavigatio
