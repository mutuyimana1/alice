import React from "react";
import * as faIcons from "react-icons/fa"
import { useWindowWidthAndHeight } from './customHooks';
import "./header.css";
import homeImage from "../assets/images/rene promesse-fotor-bg-remover-2023100916318 (1) 1.png";
import upIcon from "../assets/images/icons/Group 14.svg"
import SmallScreenHeader from "./smallScreenHeader";
const Header = () => {
  const [width, height] = useWindowWidthAndHeight();
  return (
    <>
    { width > 767 ?
    <>
      <div className=" relative ml-[50px] md:ml-[120px] xl:ml-[100px] 2xl:ml-[160px]  bg-[#EFEFEF]">
        <div className="absolute mt-24 md:mt-28 xl:pl-20 lg:mt-20 2xwl:mt-28 z-10 ">
          <h1 className="heading uppercase relative lg:max-lg:hmax-2xl:bg-green-300 lg:max-lg:max-2xl:tsext-[100px] text-[30px] sm:text-[70px] mt-5 md:mt-20 md:text-[80px] lg:text-[110px]  2xl:text-[170px]">
            Ntirenganya{" "}
            <p className="font-roboto font-bold absolute top-20 md:top-24 lg:top-28 2xl:top-[9rem]">Rene</p>{" "}
            <p className="absolute top-[11rem] sm:top-[14rem] md:top-[14rem] lg:top-[15rem] 2xl:top-[20rem] text-[30px] lg:text-[70px] 2xl:text-[80px]">Promesse</p>
          </h1>
        </div>
        <div className="absolute -right-[25rem] md:right-0 xl:right-0 mr-[28rem] mt-20 md:mt-20 lg:mt-16  2xl:mt-10 md:-mr-0 xl:mr-32 lg:max-2xl:right-20 ">
          <img src={homeImage} alt=""  className="w-[260px] md:w-[550px] xl:w-[500px] 2xl:w-[750px] "/>
        </div>
      </div>

      <div className="top-[22rem] md:top-[35rem] xl:top-[25rem] 2xl:top-[37rem] ml-[20px] md:ml-[120px] xl:ml-[180px] 2xl:ml-[240px] absolute lg:max-2xls:ml-[100px]">
        <div className="w-64 2xl:w-80 mt-28">
        <p className="text-[20px] 2xl:text-[22px] font-normal">
          Sometimes you have to run before you can walk.
        </p>
        <hr class="w-44 2xl:w-64 h-[1px] my-4 bg-black border-0 rounded" />
        </div>
        <div className="ml-[7rem] sm:ml-[10rem] md:ml-[18rem] xl:ml-[29rem] 2xl:ml-[42rem] lgs:max-2xl:ml-[28rem] mt-9 md:mt-10" >
         <a href="#about"><img src={upIcon} alt="" width={60} /></a> 
        </div>
       
      </div>
      </>:<SmallScreenHeader/>}
    </>
  );
};
export default Header;
