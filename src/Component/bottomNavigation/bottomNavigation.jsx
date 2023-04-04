import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setNavNum } from '../../redux/action/counterActions';
import "./navigation.scss"

function BottomNavigatio() {
    const dispatch = useDispatch();
    const navigate = useSelector(state=>state.BottomNavNum);
    // const [navigate, setNavigate] = useState(1);
    

    return (
        <div className='Navigation'>
            <ul>
                <li onClick={()=>{
                    dispatch(setNavNum(1))
                }} className={navigate===1 ? "active" : null}>
                    <Link to={"/"}>
                        <img src="../assets/house-solid.svg" alt="" className="icon" />
                        <span className='text-center'>Bosh Sahifa</span>
                    </Link>
                </li>
                <li onClick={()=>{
                    dispatch(setNavNum(2))
                }} className={navigate===2 ? "active" : null}>
                    <Link to={"/categories"}>
                        <img src="../assets/category.png" alt="" className="icon" />
                        <span>Kategoriya</span>
                    </Link>
                </li>
                <li onClick={()=>{
                    dispatch(setNavNum(3))
                }} className={navigate===3 ? "active" : null}>
                    <Link to={""}>
                        <img src="../assets/cart.svg" alt="" className="icon" />
                        <span>Savatcha</span>
                    </Link>
                </li>
                <li 
                onClick={()=>{
                    dispatch(setNavNum(4))
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
