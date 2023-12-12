import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import * as ioIcons from "react-icons/io";
import * as rxIcons from "react-icons/rx";
import "./header.css"
const NavBar = () => {
    const [isNavBar,setIsNavBar]=useState(false)
    const showNavBar=()=>{
        setIsNavBar(!isNavBar);
    }
    return (
        <>
        <div onClick={showNavBar} className="mobile float-right mr-3 mt-2" >
        {isNavBar ? <ioIcons.IoIosCloseCircleOutline size={30}/>:<rxIcons.RxHamburgerMenu size={25} />}
        </div>
        <ul className={`${isNavBar?"navBar-active":"nav-bar"} gap-5 lgs:max-2xlh:right-[24rem]  float-right absolute  font-normal text-[10px] md:text-base xl:text-lg 2xl:text-xl  pt-4 `}>
            <li> 
                <Link to="/"> Home </Link>
            </li>
            <li> 
                <Link to="/profile"> Profile </Link>
            </li>
            <li> 
                <Link to="/articles"> Article </Link>
            </li>
            <li> 
                <Link to="/research"> Research </Link>
            </li>
            <li> 
                <Link to="/featured"> Featured </Link>
            </li>
        </ul>
        
        
        </>
    );
};

export default NavBar;