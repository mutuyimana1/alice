import React from "react";
import * as faIcons from "react-icons/fa"
import "./header.css";
import homeImage from "../assets/images/rene promesse-fotor-bg-remover-2023100916318 (1) 1.png";
import upIcon from "../assets/images/icons/Group 14.svg"
const Header = () => {
  return (
    <>
      <div className="relative ml-[50px] md:ml-[120px] xl:ml-[100px] 2xl:ml-[160px]">
        <div className="absolute mt-24 md:mt-10 xl:pl-20 lg:mt-20 2xl:mt-28 z-10 ">
          <h1 className="heading uppercase relative lg:max-lg:hmax-2xl:bg-green-300 lg:max-lg:max-2xl:tsext-[100px] text-[50px] mt-5 md:mt-20  lg:text-[110px]  2xl:text-[170px]">
            Ntirenganya{" "}
            <p className="font-roboto font-bold absolute top-16 lg:top-28 2xl:top-[9rem]">Rene</p>{" "}
            <p className="absolute top-[9rem] lg:top-[15rem] 2xl:top-[20rem] text-[40px] lg:text-[70px] 2xl:text-[80px]">Promese</p>
          </h1>
        </div>
        <div className="absolute -right-80 md:right-0 xl:right-0 mr-[28rem] mt-28 md:mt-20 lg:mt-16 2xl:mt-10 md:-mr-20 xl:mr-32 lg:max-2xl:right-20 ">
          <img src={homeImage} alt=""  className="w-[260px] md:w-[550px] xl:w-[500px] 2xl:w-[750px] "/>
        </div>
      </div>

      <div className="top-[22rem] md:top-[35rem] xl:top-[25rem] 2xl:top-[37rem] ml-[60px] md:ml-[120px] xl:ml-[180px] 2xl:ml-[240px] absolute lg:max-2xls:ml-[100px]">
        <div className="w-64 2xl:w-80 mt-28">
        <p className="text-[20px] 2xl:text-[22px] font-normal ">
          Sometimes you have to run before you can walk.
        </p>
        <hr class="w-44 2xl:w-64 h-[1px] my-4 bg-black border-0 rounded" />
        </div>
        <div className="ml-[15rem] md:ml-[25rem] xl:ml-[29em] 2xl:ml-[42rem] lgs:max-2xl:ml-[28rem] " >
         <a href="#about"><img src={upIcon} alt="" width={60} /></a> 
            {/* <faIcons.FaChevronCircleDown  size={30} color="white" fill="#D9D9D9" /> */}
        </div>
       
      </div>
    </>
  );
};
export default Header;
