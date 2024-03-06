import React from 'react'
import "./header.css"
import Head from './new'
import upIcon from "../assets/images/icons/Group 14.svg"
import homeImage from "../assets/images/pexels-mahdi-chaghari-12975826.jpg";
const SmallScreenHeader = () => {
  return (
    <div className='homeContainer '>
        <div className='pt-32 relative h-full'>
            <h1 className='text-black absolute top-[50%] left-[20%] text-[40px] uppercase font-bold'>Alice</h1>
            <img src={homeImage} alt="" className='wd-[40redm]  absolute sm:-top-[10px] left-36 sm:left-3'/>
            <p className='absolute top-[83%] sm:top-[90%] px-[15%] text-2xl text-center'>Sametimes you have to run before you can Walk</p>
            <div className="absolute top-[98%] sm:top-[99%] left-[43%]">
         <a href="#about"><img src={upIcon} alt="" width={60} /></a> 
        </div>
        </div>
        </div>
  )
}

export default SmallScreenHeader