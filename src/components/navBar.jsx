import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import * as ioIcons from "react-icons/io";
import * as rxIcons from "react-icons/rx";
import "./header.css"
const NavBar = () => {
    const [isNavBar,setIsNavBar]=useState(false)
    const [sideBar, SetSideBar] = useState(false);
    const showSideBar = () => {
      SetSideBar(!sideBar);
    };
    const showNavBar=()=>{
        setIsNavBar(!isNavBar);
    }
    return (
        <>
        <div onClick={showSideBar} className="mobile float-right mr-3 mt-2" >
        {sideBar ? <ioIcons.IoIosCloseCircleOutline size={30}/>:<rxIcons.RxHamburgerMenu size={25} />}
        </div>
        <ul className={`${isNavBar?"nav-menu" : "nav-menu active"} gap-5 lgs:max-2xlh:right-[24rem]  float-xright relative duration-300 shadow-lg shadow-gray-500/40  font-normal text-[10px] md:text-base xl:text-lg 2xl:text-xl  pt-4 `}>
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